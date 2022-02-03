import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { NotifierService } from '../services/notifier.service';

@Component({
  selector: 'app-mat-confirm-dialog',
  templateUrl: './mat-confirm-dialog.component.html',
  styleUrls: ['./mat-confirm-dialog.component.css']
})
export class MatConfirmDialogComponent implements OnInit {


  rating: number = 0;
  starCount: number = 5;
  ratingArr = [1, 2, 3, 4, 5];
  starColor = 'primary';
  users: any = [];
  movies: any = [];
  currentMovieRate: number = 0;
  currentMovieId: string = '';



  constructor(@Inject(MAT_DIALOG_DATA) public data, private route: Router, private movieService: MovieService, private notifier: NotifierService, public dialogRef: MatDialogRef<MatConfirmDialogComponent>) { }

  ngOnInit(): void {
    this.currentMovieId = localStorage.getItem('currentMovieId');
    this.users = JSON.parse(localStorage.getItem('Users'));

  }

  closeDialog() {
    this.dialogRef.close();
  }

  onClick(rating: number) {
    this.rating = rating;
  }

  onRate() {
    debugger;
    let token = localStorage.getItem('token');
    if (token == null) {
      this.notifier.showNotification('Please login first', 'Dismiss');
      this.route.navigate(['/login'])
    }
    // Now save rating details based on login user id and current movie id
    // this.movies = JSON.parse(localStorage.getItem('MovieDetail'));
    const userData = this.users.find(e => e.email === token);
    const rateObj = {
      userId: userData.userId,
      movieId: localStorage.getItem('currentMovieId'),
      movieRate: this.currentMovieRate
    }
    this.movieService.rateMovie(rateObj);
    // Call service function to getMovieRating
    this.movieService.getMoviesRating();
    this.movieService.getAverageRating();
  }

  startClicked(index: number) {
    debugger;
    this.currentMovieRate = index + 1;
  }
  showIcon(index: number) {

    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }
}
