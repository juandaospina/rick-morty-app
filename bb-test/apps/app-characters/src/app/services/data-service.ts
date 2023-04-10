import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Characters } from '../types';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // constructor(private _http: HttpClient) {}
  private _http = inject(HttpClient);

  getAllCharacters() {
    return this._http.get<Characters>('https://rickandmortyapi.com/api/character');
  }
}
