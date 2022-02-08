import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ShowMovieComponent } from '../show-movie/show-movie.component';
import { AddMovieComponent } from './add-movie.component';

const routes: Routes = [

  {
    path: '',
    component: AddMovieComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddMovieRoutingModule { }
