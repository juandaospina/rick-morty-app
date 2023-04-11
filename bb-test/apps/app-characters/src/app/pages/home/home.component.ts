import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../components/components.module';
import { DataService } from '../../services/data-service';
import { Characters, Info, Result } from '../../types';
import { enviroments } from '../../enviroments';
import {
  MatProgressSpinnerModule,
  ProgressSpinnerMode,
} from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    MatProgressSpinnerModule,
  ],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private dataService: DataService) {}

  public characters: Result[] = [];
  public apiResult!: Info;
  public query: string = '';
  public loading: boolean = false;
  public status: string = 'unknown';
  public queryResults: Result[] = [];

  ngOnInit(): void {
    const url = `${enviroments.apiUrl}/?page=1`;
    this.dataService.getAllCharacters(url).subscribe((data) => {
      this.apiResult = data.info;
      this.characters = data.results;
    });
  }

  onCharactersSearch() {
    if (this.query.length === 0) return;
    this.loading = true;
    this.dataService
      .getCharactersQuery(this.query, this.status)
      .subscribe((data) => {
        this.apiResult = data.info;
        this.queryResults = data.results;
        this.loading = false;
      });
  }
}
