import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from '../add-movie/add-movie.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ShowMovieComponent } from './show-movie.component';

const routes: Routes = [
  {
    path:'',
    component: ShowMovieComponent
  },
  // {path: 'add-movie', component: AddMovieComponent},
  // {path: 'dashboard', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowMovieRoutingModule { }
