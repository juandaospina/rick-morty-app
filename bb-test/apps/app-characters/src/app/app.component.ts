import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';

import { ServicesModule } from './services/services.module';

@Component({
  standalone: true,
  imports: [RouterModule, HttpClientModule, ServicesModule],
  providers: [HttpClientModule],
  selector: 'bb-test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app-characters';
}
