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
  detail!: Species[]

  constructor (
    private route: ActivatedRoute,
    private speciesService : SpeciesService
    ) {}

 ngOnInit(): void {
   const id = Number(this.route.snapshot.paramMap.get('id'));
   console.log(id)

    }
    
  }
