import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Planets } from 'src/app/model/planets.model';
import { PlanetsService } from 'src/app/services/planets.service';

@Component({
  selector: 'app-planets-detail',
  templateUrl: './planets-detail.component.html',
  styleUrls: ['./planets-detail.component.css']
})
export class PlanetsDetailComponent implements OnInit {
  detail!: Planets[]

  constructor (
    private route: ActivatedRoute,
    private planetsservice : PlanetsService
    ) {}

 ngOnInit(): void {
   const id = Number(this.route.snapshot.paramMap.get('id'));
   console.log(id)

    }
  }