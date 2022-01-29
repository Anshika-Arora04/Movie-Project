import { Component, Input, OnInit } from '@angular/core';
import { combineLatestInit } from 'rxjs/internal/observable/combineLatest';
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

  constructor(private movieService: MovieService, private route: Router) { }

  ngOnInit(): void {
    this.movieService.getAllMovies();
    this.movieService.userSubject.subscribe(data => {
      this.movies = data;
    });
  }
  getMovieDetail(movieId: any){
    var details = this.movies.find(movie => movie.id == movieId );
    localStorage.setItem('MovieDetail', JSON.stringify(details));
    this.route.navigate(['/movie-detail'])
  }

}
