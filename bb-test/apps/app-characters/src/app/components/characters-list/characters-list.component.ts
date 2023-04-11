import { Component, Input, OnInit } from '@angular/core';

import { DataService } from '../../services/data-service';
import { Info, Result } from '../../types';
import { enviroments } from '../../enviroments';

@Component({
  // standalone: true,
  selector: 'app-characters',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
})
export class CharactersListComponent {
  @Input() apiResult!: Info;
  @Input() characters!: Result[];
  @Input() public name: string = 'Juan Ospina';
  public page: number = 0;
  constructor(private dataService: DataService) {}

  // ngOnInit(): void {
  //   const url = `${enviroments.apiUrl}/?page=1`;
  //   this.dataService.getAllCharacters(url).subscribe((data) => {
  //     this.apiResult = data.info;
  //     this.characters = data.results;
  //   });
  // }

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
