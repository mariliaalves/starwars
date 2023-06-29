import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharactersComponent } from './pages/characters/characters.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { HomeComponent } from './pages/home/home.component';
import { PlanetsComponent } from './pages/planets/planets.component';
import { SpeciesComponent } from './pages/species/species.component';

import { CharactersDetailComponent } from './pages/characters-detail/characters-detail.component';
import { MoviesDetailComponent } from './pages/movies-detail/movies-detail.component';
import { PlanetsDetailComponent } from './pages/planets-detail/planets-detail.component';
import { SpeciesDetailComponent } from './pages/species-detail/species-detail.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'characters', component: CharactersComponent },
  {path: 'movies', component: MoviesComponent},
  {path: 'planets', component: PlanetsComponent},
  {path: 'species', component: SpeciesComponent},
  {path: 'characters/:id', component: CharactersDetailComponent},
  {path: 'movies/:id', component: MoviesDetailComponent},
  {path: 'planets/:id', component: PlanetsDetailComponent},
  {path: 'species/:id', component: SpeciesDetailComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
