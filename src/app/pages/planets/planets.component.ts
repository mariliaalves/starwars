import { Component, OnInit } from '@angular/core';
import { Planets } from 'src/app/model/planets.model';
import { PlanetsService } from 'src/app/services/planets.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  planet!: Planets[]

  constructor (private planetsSR: PlanetsService) {}
 ngOnInit(): void {
   this.charactersGet()
 }

 charactersGet(): void {
  
     this.planetsSR.getPlanets().subscribe( (data) => {
      this.planet = data.results
     } )
      
  }
  getPlanetId(url: string): string {
    return url.split('/').filter(el => Number.parseInt(el))[0]
  }

 }
