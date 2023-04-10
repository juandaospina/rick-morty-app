import { Component, inject } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  //   styleUrls: ['./inicio.component.scss'],
})
export class PruebaComponent {
  public characters: any = [];
  // public characterService = inject(CharactersService);
}
