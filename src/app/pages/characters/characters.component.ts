import { Component, OnInit } from '@angular/core';
import { Characters } from 'src/app/model/characters.model';
import { CharactersService } from 'src/app/services/characters.service';
import StringUtils from 'src/app/utils/string';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
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

  getCharacterId(url: string): string {
    return StringUtils.extractIdFromUrl(url)
  }
  

 }
