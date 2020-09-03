import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieLandingComponent } from './movie-landing/movie-landing.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesListComponent } from './movies-list/movies-list.component';

const routes: Routes = [
  //{path: '', redirectTo:'', pathMatch:'full'},
  {path: '', component: MovieLandingComponent},
  {path: 'details', component: MovieDetailsComponent},
  {path: 'list', component: MoviesListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }

export const AppRouteCompoents = [  MovieLandingComponent,MovieDetailsComponent, MoviesListComponent ]