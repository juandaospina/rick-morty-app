import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { InfiniteScrollModule } from "ngx-infinite-scroll";

import { CharacterCardComponent } from './character-card/character-card.component';
import { CharactersComponent } from './characters-list/characters-list.component';

@NgModule({
  declarations: [CharacterCardComponent, CharactersComponent],
  imports: [CommonModule, InfiniteScrollModule, NgOptimizedImage],
  exports: [CharactersComponent],
})
export class ComponentsModule {}
