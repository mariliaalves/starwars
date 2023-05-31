import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharactersComponent } from './pages/characters/characters.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { HomeComponent } from './pages/home/home.component';
import { PlanetsComponent } from './pages/planets/planets.component';
import { SpeciesComponent } from './pages/species/species.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path:'characters', component: CharactersComponent },
  {path: 'movies', component: MoviesComponent},
  {path: 'planets', component: PlanetsComponent},
  {path: 'species', component: SpeciesComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
