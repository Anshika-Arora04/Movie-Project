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

  constructor(private movieService: MovieService, private route: Router) {
    movieService.getFilteredMovie.subscribe(searchedMovie => this.movies = searchedMovie)
  }

  ngOnInit(): void {
    this.movieService.getAllMovies();
    this.movieService.userSubject.subscribe(data => {
      this.movies = data;
      console.log(data);

    });
  }

  //Below function is to find the movies by id and set it into MovieDetail object
  getMovieDetail(movieId: any) {
    var details = this.movies.find(movie => movie.id == movieId);
    localStorage.setItem('MovieDetail', JSON.stringify(details));
    this.route.navigate(['/movie-detail'])
  }

}
