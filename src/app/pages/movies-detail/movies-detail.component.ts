import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movies } from 'src/app/model/movies.model';
import { MoviesService } from 'src/app/services/movies.service';
import { SpeciesService } from 'src/app/services/species.service';
import { CharactersService } from 'src/app/services/characters.service';
import { PlanetsService } from 'src/app/services/planets.service';
import StringUtils from 'src/app/utils/string';
import { Species } from 'src/app/model/species.model';
import { Characters } from 'src/app/model/characters.model';
import { Planets } from 'src/app/model/planets.model';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css']
})
export class MoviesDetailComponent implements OnInit {
  detail!: Movies
  species: Species[] = []
  characters: Characters[] = []
  planets: Planets[] = []

  constructor (
    private route: ActivatedRoute,
    private moviesService : MoviesService,
    private speciesService : SpeciesService,
    private charactersService : CharactersService,
    private planetsService : PlanetsService
    ) {}

    ngOnInit(): void {
      this.getMovie();
    }
  
   getMovie(): void {
     const id = this.route.snapshot.paramMap.get('id') ?? ''
     
     this.moviesService.getMovie(id).subscribe((response: Movies) => {
      this.detail = response;
      console.log(this.detail)
     })
     this.detail.species.forEach((species: string) => {
      const speciesId = StringUtils.extractIdFromUrl(species)
      console.log(speciesId)
      this.speciesService.getSpecie(speciesId).subscribe((response: Species) => {
        console.log(response)
        this.species.push(response)
      })
     })
     this.detail.characters.forEach((characters: string) => {
      const charactersId = StringUtils.extractIdFromUrl(characters)
      console.log(charactersId)
      this.charactersService.getCharacter(charactersId).subscribe((response: Characters) => {
        console.log(response)
        this.characters.push(response)
      })
     })
     this.detail.planets.forEach((planets: string) => {
      const planetsId = StringUtils.extractIdFromUrl(planets)
      console.log(planetsId)
      this.planetsService.getPlanet(planetsId).subscribe((response: Planets) => {
        console.log(response)
        this.planets.push(response)
      })
     })
     
  
  }
  extractIdFromUrl(url : string) : string {
    return StringUtils.extractIdFromUrl(url)
  }
}
    
