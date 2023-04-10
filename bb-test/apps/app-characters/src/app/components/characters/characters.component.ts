import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data-service';

@Component({
  standalone: true,
  selector: 'app-characters',
  templateUrl: './characters.component.html',
    styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  constructor( private dataService: DataService ) {}
  public characters: any = [];

  ngOnInit(): void {
    this.dataService.getAllCharacters().subscribe(data => {
      console.log("CHARACTERS_DATA", data.res);
      this.characters = data.results;
    })
  }
}