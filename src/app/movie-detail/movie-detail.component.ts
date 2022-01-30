import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie';

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

  movies: Movie[];
  movie: any;
  //star: any;
  constructor() { }

  ngOnInit(): void {

    this.movie = JSON.parse(localStorage.getItem('MovieDetail'));
    console.log(this.movie);
  }


  /*
  Rating Dialog Functionality:
  openDialog(): void {
    const dialogRef = this.matDialog.open(MatConfirmDialogComponent, {
      width: '350px',
      data: {dialogType: 'star', movieName: this.movie.movieName}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.star = result;
      this.movie.rating = result;
      console.log(this.movie);
      var allMovies = JSON.parse(localStorage.getItem('MovieDetails'));
      allMovies = allMovies.map(movie => movie.id !== this.movie.id ? movie : this.movie);
      console.log(allMovies);
      //localStorage.setItem('MovieDetails', JSON.stringify(allMovies));

    });
  }*/
}
