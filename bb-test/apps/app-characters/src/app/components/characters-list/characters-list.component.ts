import { Component, Input } from '@angular/core';

import { DataService } from '../../services/data-service';
import { Info, Result } from '../../types';

@Component({
  selector: 'app-characters',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
})
export class CharactersListComponent {
  constructor(
    private dataService: DataService
  ) {}
  @Input() apiResult!: Info;
  @Input() characters!: Result[];
  @Input() public name: string = 'Juan Ospina';
  public page: number = 0;
  public blockInfiniteScroll: boolean = false;

  onHandlerScroll() {
    if (this.apiResult.next) {
      this.page++;
      this.dataService
        .getAllCharacters(this.apiResult.next)
        .subscribe((data) => {
          this.apiResult = data.info;
          this.characters = [...this.characters, ...data.results];
        });
      this.blockInfiniteScroll = true;
      setTimeout(() => {
        this.blockInfiniteScroll = !this.blockInfiniteScroll;
      }, 2000)
    }
  }
}
