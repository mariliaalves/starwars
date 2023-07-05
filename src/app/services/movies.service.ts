import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movies } from '../model/movies.model';
import GenericApiResult from '../model/genericApiResults';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  apiMovies = 'https://swapi.dev/api/films/'

  constructor(private http: HttpClient) { }

  public getMovies() : Observable<GenericApiResult<Movies[]>> {
    return this.http.get<GenericApiResult<Movies[]>>(this.apiMovies)
  }
  public getMovie(id: string) : Observable<Movies>{
    return this.http.get<Movies>(this.apiMovies + id)

  }
}
