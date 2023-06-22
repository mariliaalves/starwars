import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/model/movies.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movie!: Movies[]

  constructor (private moviesSR: MoviesService) {}
 ngOnInit(): void {
   this.moviesGet()
 }

 moviesGet(): void {
  
     this.moviesSR.getMovies().subscribe( (data) => {
      this.movie = data.results
     } )
      
  }

 }
