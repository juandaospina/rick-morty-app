import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data-service';
import { Info, Result } from '../../types';
import { enviroments } from '../../enviroments';

@Component({
  // standalone: true,
  selector: 'app-characters',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
})
export class CharactersComponent implements OnInit {
  constructor(private dataService: DataService) {}
  public apiResult!: Info;
  public characters: Result[] = [];
  public page: number = 0;

  ngOnInit(): void {
    const url = `${enviroments.apiUrl}/?page=1`;
    this.dataService.getAllCharacters(url).subscribe((data) => {
      console.log('[characters]', data.results);
      this.apiResult = data.info;
      this.characters = data.results;
    });
  }

  onHandlerScroll() {
    if (this.apiResult.next) {
      this.page++;
      this.dataService
        .getAllCharacters(this.apiResult.next)
        .subscribe((data) => {
          this.apiResult = data.info;
          this.characters = [...this.characters, ...data.results];
        });
    }
  }
}
