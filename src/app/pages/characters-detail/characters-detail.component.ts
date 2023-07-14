import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Characters } from 'src/app/model/characters.model';
import { CharactersService } from 'src/app/services/characters.service';
import { PlanetsService } from 'src/app/services/planets.service';
import { MoviesService } from 'src/app/services/movies.service';
import { SpeciesService } from 'src/app/services/species.service';
import StringUtils from 'src/app/utils/string';
import { Planets } from 'src/app/model/planets.model';

@Component({
  selector: 'app-characters-detail',
  templateUrl: './characters-detail.component.html',
  styleUrls: ['./characters-detail.component.css']
})
export class CharactersDetailComponent implements OnInit {
  detail!: Characters
  homeworld!: Planets ;

  constructor (
    private route: ActivatedRoute,
    private charactersService : CharactersService,
    private homeworldService : PlanetsService,
    private moviesService : MoviesService,
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
      console.log(StringUtils.extractIdFromUrl(this.detail.homeworld))
      const homeworldId = StringUtils.extractIdFromUrl(this.detail.homeworld)
      this.homeworldService.getPlanet(homeworldId).subscribe((response: Planets) => {
        console.log(response)
        this.homeworld = response
      })

 
    });

  }
}
  
  


