import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Species } from 'src/app/model/species.model';
import { SpeciesService } from 'src/app/services/species.service';


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
         
    
