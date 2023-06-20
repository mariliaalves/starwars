import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import GenericApiResult from '../model/genericApiResults';
import { Characters } from '../model/characters.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  apiCharacters = 'https://swapi.dev/api/people/'

  constructor(private http: HttpClient) { }

  public getCharacters() : Observable<GenericApiResult<Characters[]>> {
    return this.http.get<GenericApiResult<Characters[]>>(this.apiCharacters)
  }
}
