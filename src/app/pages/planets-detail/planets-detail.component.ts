import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Planets } from 'src/app/model/planets.model';
import { PlanetsService } from 'src/app/services/planets.service';
import { CharactersService } from 'src/app/services/characters.service';
import { MoviesService } from 'src/app/services/movies.service';
import { Characters } from 'src/app/model/characters.model';
import { Movies } from 'src/app/model/movies.model';
import StringUtils from 'src/app/utils/string';

@Component({
  selector: 'app-planets-detail',
  templateUrl: './planets-detail.component.html',
  styleUrls: ['./planets-detail.component.css']
})
export class PlanetsDetailComponent implements OnInit {
  detail!: Planets
  residents: Characters[] = []
  films: Movies[] = []


  constructor (
    private route: ActivatedRoute,
    private planetsService : PlanetsService,
    private residentsService : CharactersService,
    private filmsService : MoviesService

    ) {}

    ngOnInit(): void {
      this.getPlanet();
    }
  
    getPlanet(): void {
      const id = this.route.snapshot.paramMap.get('id') ?? '';
      this.planetsService.getPlanet(id).subscribe((response: Planets) => {
        this.detail = response;
        console.log(this.detail);
    
        this.detail.residents.forEach((resident: string) => {
          const residentId = StringUtils.extractIdFromUrl(resident);
          console.log(residentId);
          this.residentsService.getCharacter(residentId).subscribe((response: Characters) => {
            console.log(response);
            this.residents.push(response);
          });
        });
    
        this.detail.films.forEach((film: string) => {
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