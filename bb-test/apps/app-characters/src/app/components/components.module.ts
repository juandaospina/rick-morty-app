import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterCardComponent } from './character-card/character-card.component';
import { CharactersComponent } from './characters/characters.component';

@NgModule({
  declarations: [CharacterCardComponent, CharactersComponent],
  imports: [CommonModule],
  exports: [CharactersComponent],
})
export class ComponentsModule {}
