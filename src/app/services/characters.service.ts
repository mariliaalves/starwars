import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import GenericApiResult from '../model/genericApiResults';
import { Characters } from '../model/characters.model';
import { MoviesService } from './movies.service';
import { PlanetsService } from './planets.service';
import { SpeciesService } from './species.service';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  apiCharacters = 'https://swapi.dev/api/people/'

  constructor(
    private http: HttpClient,
    private moviesService: MoviesService,
    private planetsService: PlanetsService,
    private speciesService: SpeciesService
    
    ) { }

  public getCharacters() : Observable<GenericApiResult<Characters[]>> {
    return this.http.get<GenericApiResult<Characters[]>>(this.apiCharacters)
  }

  public getCharacter(id: string) : Observable<Characters>{
    return this.http.get<Characters>(this.apiCharacters + id)

  }

}
