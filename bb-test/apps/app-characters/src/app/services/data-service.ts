import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Characters } from '../types';
import { enviroments } from '../enviroments';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // constructor(private _http: HttpClient) {}
  private _http = inject(HttpClient);

  getAllCharacters(url: string) {
    return this._http.get<Characters>(url);
  }

  getCharactersQuery(name: string, status: string) {
    return this._http.get<Characters>(
      `${enviroments.apiUrl}/?name=${name}&status=${status}`
    );
  }
}
