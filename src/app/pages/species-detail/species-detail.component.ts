import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Species } from 'src/app/model/species.model';
import { SpeciesService } from 'src/app/services/species.service';
import { PlanetsService } from 'src/app/services/planets.service';
import { CharactersService } from 'src/app/services/characters.service';
import { MoviesService } from 'src/app/services/movies.service';
import { Planets } from 'src/app/model/planets.model';
import { Characters } from 'src/app/model/characters.model';
import { Movies } from 'src/app/model/movies.model';
import StringUtils from 'src/app/utils/string';


@Component({
  selector: 'app-species-detail',
  templateUrl: './species-detail.component.html',
  styleUrls: ['./species-detail.component.css']
})
export class SpeciesDetailComponent implements OnInit {
  detail!: Species
  homeworld!: Planets
  people: Characters[] = []
  films: Movies[] = []

  constructor (
    private route: ActivatedRoute,
    private speciesService : SpeciesService,
    private homeworldService : PlanetsService,
    private peopleService : CharactersService,
    private filmsService : MoviesService
    ) {}

 ngOnInit(): void {
  this.getSpecie();

    }

 getSpecie(): void {
      const id = this.route.snapshot.paramMap.get('id') ?? ''
      this.speciesService.getSpecie(id).subscribe((response: Species) => {
       this.detail = response;
       console.log(this.detail);
       const homeworldId = StringUtils.extractIdFromUrl(this.detail.homeworld)
       this.homeworldService.getPlanet(homeworldId).subscribe((response: Planets) => {
        this.homeworld = response
       })
       
       this.detail.people.forEach((resident: string) => {
        const residentId = StringUtils.extractIdFromUrl(resident);
        console.log(residentId);
        this.peopleService.getCharacter(residentId).subscribe((response: Characters) => {
          console.log(response);
          this.people.push(response);
        });

      });this.detail.films.forEach((film: string) => {
        const filmId = StringUtils.extractIdFromUrl(film);
        console.log(filmId);
        this.filmsService.getMovie(filmId).subscribe((response: Movies) => {
          console.log(response);
          this.films.push(response);
        });
      });
    });
    
  }
  extractIdFromUrl(url : string) : string {
    return StringUtils.extractIdFromUrl(url)
  }

}
         
    
