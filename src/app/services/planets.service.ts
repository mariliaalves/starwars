import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import GenericApiResult from '../model/genericApiResults';
import { Planets } from '../model/planets.model';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  apiPlanets = 'https://swapi.dev/api/planets/'

  constructor(private http: HttpClient) { }

  public getPlanets() : Observable<GenericApiResult<Planets[]>> {
    return this.http.get<GenericApiResult<Planets[]>>(this.apiPlanets)
  }
}