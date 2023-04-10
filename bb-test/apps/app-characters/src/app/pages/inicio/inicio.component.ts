import { Component, inject } from '@angular/core';

import { CharactersComponent } from '../../components/characters-list/characters-list.component';
import { ComponentsModule } from '../../components/components.module';

@Component({
  standalone: true,
  imports: [ComponentsModule],
  selector: 'bb-test-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent {
  public characters: any = [];

  ngOnInit(): void {
    
  }
}
