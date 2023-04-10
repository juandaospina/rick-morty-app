import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Characters } from '../types';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // constructor(private _http: HttpClient) {}
  private _http = inject(HttpClient);

  getAllCharacters(url: string) {
    return this._http.get<Characters>(url);
  }
}
