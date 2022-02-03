import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatConfirmDialogComponent } from '../mat-confirm-dialog/mat-confirm-dialog.component';
import { Movie } from '../model/movie';
import { MovieService } from '../services/movie.service';

export interface DialogData {
  dialogType: string;
  star: any;
  movieName: string;
}

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  starColor: 'primary'
  movies: Movie[];
  movie: any;
  rating: number = 0;
  starCount: number = 5;
  ratingArr = [1];
  star: any;
  averageRating: number = 0;
  curentMovieRateAsPerUser: any = null;
  constructor(private matDialog: MatDialog, private movieService: MovieService) { }

  ngOnInit(): void {

    this.movie = JSON.parse(localStorage.getItem('MovieDetail'));
    this.movieService.getMoviesRating();
    this.movieService.currentMovieRateByUser.subscribe(data => {
      this.curentMovieRateAsPerUser = data;
    });
    this.movieService.getAverageRating();
    this.movieService.averageRateSubject.subscribe(data => {
      this.averageRating = data;
    })

  }



  openDialog(): void {
    const dialogRef = this.matDialog.open(MatConfirmDialogComponent, {
      width: '350px',
      data: { dialogType: 'star', movieName: this.movie.movieName }
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }
}
