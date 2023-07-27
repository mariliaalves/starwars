import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movies } from '../model/movies.model';
import GenericApiResult from '../model/genericApiResults';
import { SpeciesService } from './species.service';
import { CharactersService } from './characters.service';
import { PlanetsService } from './planets.service';
import { IMoviesService } from './movies.service.interface';

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
