import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

// import { CharactersListComponent } from '../components/characters-list/characters-list.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, ComponentsModule],
  // providers: [ComponentsModule],
  // exports: [InicioComponent],
})
export class PagesModule {}
