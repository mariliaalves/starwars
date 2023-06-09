import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Characters } from 'src/app/model/characters.model';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters-detail',
  templateUrl: './characters-detail.component.html',
  styleUrls: ['./characters-detail.component.css']
})
export class CharactersDetailComponent implements OnInit {
  detail!: Characters

  constructor (
    private route: ActivatedRoute,
    private charactersService : CharactersService
    ) {}

  ngOnInit(): void {
    this.getCharacter();
  }

 getCharacter(): void {
   const id = this.route.snapshot.paramMap.get('id') ?? ''
   this.charactersService.getCharacter(id).subscribe((response: Characters) => {
    this.detail = response;
   })
  

  //    this.charactersService.getCharactersDetail(id).subscribe((response: Characters) => {
   //   this.detail = response;
   //  });

    }
  }
      
  


