import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from '../add-movie/add-movie.component';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { ShowMovieComponent } from '../show-movie/show-movie.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent},
  //  { path: 'add-movie', component: AddMovieComponent },
  //  { path: 'show-movie', component: ShowMovieComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
