import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import {MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { CharacterCardComponent } from './character-card/character-card.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';

@NgModule({
  declarations: [
    CharactersListComponent,
    CharacterCardComponent,
    ProgressSpinnerComponent,
  ],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    NgOptimizedImage,
    MatProgressSpinnerModule,
    MatProgressBarModule
    // BrowserAnimationsModule
  ],
  exports: [
    CharactersListComponent,
    CharacterCardComponent,
    ProgressSpinnerComponent,
    // MatProgressSpinner
  ],
})
export class ComponentsModule {}
