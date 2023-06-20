import { Component, OnInit } from '@angular/core';
import { Characters } from 'src/app/model/characters.model';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  character!: Characters[]

  constructor (private charactersSR: CharactersService) {}
 ngOnInit(): void {
   this.charactersGet()
 }

 charactersGet(): void {
  
     this.charactersSR.getCharacters().subscribe( (data) => {
      this.character = data.results
     } )
      
     

  }

 }

