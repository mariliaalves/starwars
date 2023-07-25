import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Planets } from 'src/app/model/planets.model';
import { PlanetsService } from 'src/app/services/planets.service';
import { CharactersService } from 'src/app/services/characters.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-planets-detail',
  templateUrl: './planets-detail.component.html',
  styleUrls: ['./planets-detail.component.css']
})
export class PlanetsDetailComponent implements OnInit {
  detail!: Planets

  constructor (
    private route: ActivatedRoute,
    private planetsService : PlanetsService
    ) {}

    ngOnInit(): void {
      this.getPlanet();
    }
  
   getPlanet(): void {
     const id = this.route.snapshot.paramMap.get('id') ?? ''
     this.planetsService.getPlanet(id).subscribe((response: Planets) => {
      this.detail = response;
     })
    
      }
    }

   