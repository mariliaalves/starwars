import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { forkJoin } from 'rxjs';
import { Movies } from '../model/movies.model';
import GenericApiResult from '../model/genericApiResults';
import { IMoviesService } from './movies.service.interface';
import { SpeciesService } from './species.service';
import { Species } from '../model/species.model';
import { CharactersService } from './characters.service';
import { Characters } from '../model/characters.model';
import { PlanetsService } from './planets.service';
import { Planets } from '../model/planets.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService implements IMoviesService {
  apiMovies = 'https://swapi.dev/api/films/'

  constructor(
    private http: HttpClient,
    ) { }

  public getMovies() : Observable<GenericApiResult<Movies[]>> {
    return this.http.get<GenericApiResult<Movies[]>>(this.apiMovies)
  }
  public getMovie(id: string) : Observable<Movies>{
    return this.http.get<Movies>(this.apiMovies + id)
 }
}

