import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';
import {Observable } from 'rxjs';
import { Movies } from '../model/movies.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Movies> {
    const url = `${environment.baseUrl}films`;
    return this.http.get<Movies>(url);
  }
}
