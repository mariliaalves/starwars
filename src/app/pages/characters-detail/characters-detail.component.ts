import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Characters } from 'src/app/model/characters.model';
import { CharactersService } from 'src/app/services/characters.service';
import { PlanetsService } from 'src/app/services/planets.service';
import { MoviesService } from 'src/app/services/movies.service';
import { SpeciesService } from 'src/app/services/species.service';
import StringUtils from 'src/app/utils/string';
import { Planets } from 'src/app/model/planets.model';
import { Movies } from 'src/app/model/movies.model';
import { Species } from 'src/app/model/species.model';

@Component({
  selector: 'app-characters-detail',
  templateUrl: './characters-detail.component.html',
  styleUrls: ['./characters-detail.component.css']
})
export class CharactersDetailComponent implements OnInit {
  detail!: Characters
  homeworld!: Planets
  films: Movies[] = []
  species: Species[] = []

  constructor (
    private route: ActivatedRoute,
    private charactersService : CharactersService,
    private homeworldService : PlanetsService,
    private filmsService : MoviesService,
    private speciesService : SpeciesService
    ) {}

  ngOnInit(): void {
    this.getCharacter();

  }

  getCharacter(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? ''
  
    this.charactersService.getCharacter(id).subscribe((response: Characters) => {
      this.detail = response;
      console.log(this.detail)
      const homeworldId = StringUtils.extractIdFromUrl(this.detail.homeworld)
      this.homeworldService.getPlanet(homeworldId).subscribe((response: Planets) => {
        this.homeworld = response
      });
      this.detail.films.forEach((film: string ) => {
        const filmId = StringUtils.extractIdFromUrl(film)
        console.log(filmId)
        this.filmsService.getMovie(filmId).subscribe((response: Movies) => {
          console.log(response)
          this.films.push(response)
        })
      }) 

      this.detail.species.forEach((specie: string) => {
        const specieId = StringUtils.extractIdFromUrl(specie)
        console.log(specieId)
        this.speciesService.getSpecie(specieId).subscribe((response: Species) => {
          console.log(response)
          this.species.push(response)

        })
      })
    });
  }

  extractIdFromUrl(url : string) : string {
    return StringUtils.extractIdFromUrl(url)
  }
}

  
  


