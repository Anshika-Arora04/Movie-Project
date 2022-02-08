import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddMovieRoutingModule } from './add-movie-routing.module';
import { AddMovieComponent } from './add-movie.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from '../dashboard/dashboard.component';




@NgModule({
  declarations: [ AddMovieComponent ],
  imports: [
    CommonModule,
    AddMovieRoutingModule,
    SharedModule,
  ]
})
export class AddMovieModule { }

