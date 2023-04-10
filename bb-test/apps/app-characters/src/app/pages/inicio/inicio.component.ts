import { Component, inject } from '@angular/core';

import { PruebaComponent } from '../../components/prueba/prueba.component';
import { CharactersComponent } from '../../components/characters/characters.component';

@Component({
  standalone: true,
  imports: [PruebaComponent, CharactersComponent],
  selector: 'bb-test-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent {
  public characters: any = [];

  ngOnInit(): void {
    
  }
}
