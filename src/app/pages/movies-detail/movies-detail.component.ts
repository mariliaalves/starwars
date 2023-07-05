import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movies } from 'src/app/model/movies.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css']
})
export class MoviesDetailComponent implements OnInit {
  detail!: Movies

  constructor (
    private route: ActivatedRoute,
    private moviesService : MoviesService
    ) {}

    ngOnInit(): void {
      this.getMovie();
    }
  
   getMovie(): void {
     const id = this.route.snapshot.paramMap.get('id') ?? ''
     this.moviesService.getMovie(id).subscribe((response: Movies) => {
      this.detail = response;
     })
  }
}
    
