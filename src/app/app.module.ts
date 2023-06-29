import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpecieReadComponent } from './components/species/specie-read/specie-read.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { PlanetsComponent } from './pages/planets/planets.component';
import { SpeciesComponent } from './pages/species/species.component';

import { HttpClientModule } from '@angular/common/http';
import { CharactersDetailComponent } from './pages/characters-detail/characters-detail.component';
import { MoviesDetailComponent } from './pages/movies-detail/movies-detail.component';
import { PlanetsDetailComponent } from './pages/planets-detail/planets-detail.component';
import { SpeciesDetailComponent } from './pages/species-detail/species-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    SpecieReadComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MoviesComponent,
    CharactersComponent,
    PlanetsComponent,
    SpeciesComponent,
    CharactersDetailComponent,
    MoviesDetailComponent,
    PlanetsDetailComponent,
    SpeciesDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
