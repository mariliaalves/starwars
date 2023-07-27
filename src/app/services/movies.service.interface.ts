import { Observable } from 'rxjs';
import { Movies } from '../model/movies.model';
import GenericApiResult from '../model/genericApiResults';

export interface IMoviesService {
  getMovies(): Observable<GenericApiResult<Movies[]>>;
  getMovie(id: string): Observable<Movies>;
}