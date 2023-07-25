import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Species } from 'src/app/model/species.model';
import { SpeciesService } from 'src/app/services/species.service';
import { PlanetsService } from 'src/app/services/planets.service';
import { CharactersService } from 'src/app/services/characters.service';
import { MoviesService } from 'src/app/services/movies.service';


@Component({
  selector: 'app-species-detail',
  templateUrl: './species-detail.component.html',
  styleUrls: ['./species-detail.component.css']
})
export class SpeciesDetailComponent implements OnInit {
  detail!: Species

  constructor (
    private route: ActivatedRoute,
    private speciesService : SpeciesService
    ) {}

 ngOnInit(): void {
  this.getSpecie();

    }

 getSpecie(): void {
      const id = this.route.snapshot.paramMap.get('id') ?? ''
      this.speciesService.getSpecie(id).subscribe((response: Species) => {
       this.detail = response;
      })
     
       }
     }
         
    
