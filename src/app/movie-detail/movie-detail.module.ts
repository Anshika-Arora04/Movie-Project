import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieDetailRoutingModule } from './movie-detail-routing.module';
import { MovieDetailComponent } from './movie-detail.component';
import { CommentComponent } from '../comment/comment.component';
import { MatConfirmDialogComponent } from '../mat-confirm-dialog/mat-confirm-dialog.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MovieDetailComponent,
    CommentComponent,
    MatConfirmDialogComponent,
  ],
  imports: [
    CommonModule,
    MovieDetailRoutingModule,
    SharedModule,
  ]
})
export class MovieDetailModule { }
