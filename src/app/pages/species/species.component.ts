import { Component, OnInit } from '@angular/core';
import { Species } from 'src/app/model/species.model';
import { SpeciesService } from 'src/app/services/species.service';


@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {
  specie!: Species[]

  constructor (private speciesSR: SpeciesService) {}
 ngOnInit(): void {
   this.speciesGet()
 }

 speciesGet(): void {
  
     this.speciesSR.getSpecies().subscribe( (data) => {
      this.specie = data.results
     } )
      
  }

 }