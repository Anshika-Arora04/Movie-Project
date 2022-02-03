import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie';
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  movies: Movie[];
  genres: any = [];
  movie: any;
  allMovies: any = [];

  constructor(private movieService: MovieService, private route: Router) {
    movieService.getFilteredMovie.subscribe(searchedMovie => this.movies = searchedMovie)
  }

  ngOnInit(): void {

    this.genres = ['Action', 'Comedy', 'Biography', 'Drama', 'Sci-fi', 'Fantasy', 'Horror', 'Thriller', 'Romanace'];
    this.movie = JSON.parse(localStorage.getItem('MoviDetails'));

    this.movieService.getAllMovies();
    this.movieService.userSubject.subscribe(data => {
      this.movies = data;
      console.log(data);
    });
    this.allMovies = this.movies;
  }

  filterMoviesByTag(zone) {
    this.movies = this.allMovies.filter(x => x.zoner.includes(zone));
  }
  //Below function is to find the movies by id and set it into MovieDetail object
  getMovieDetail(movieId: any) {
    var details = this.movies.find(movie => movie.id == movieId);
    localStorage.setItem('MovieDetail', JSON.stringify(details));
    localStorage.setItem('currentMovieId', JSON.stringify(movieId));
    this.route.navigate(['/movie-detail'])
  }

}
