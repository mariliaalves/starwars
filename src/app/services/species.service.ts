import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import GenericApiResult from '../model/genericApiResults';
import { Species } from '../model/species.model';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {
  apiSpecies = 'https://swapi.dev/api/species/'

  constructor(private http: HttpClient) { }

  public getSpecies() : Observable<GenericApiResult<Species[]>> {
    return this.http.get<GenericApiResult<Species[]>>(this.apiSpecies)
  }

  public getSpecie(id: string) : Observable<Species>{
    return this.http.get<Species>(this.apiSpecies + id)

  }
}