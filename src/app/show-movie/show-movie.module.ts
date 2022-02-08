import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowMovieRoutingModule } from './show-movie-routing.module';
import { ShowMovieComponent } from './show-movie.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ShowMovieComponent],
  imports: [
    CommonModule,
    ShowMovieRoutingModule,
    SharedModule,
  ]
})
export class ShowMovieModule { }
