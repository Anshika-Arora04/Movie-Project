import { Injectable } from '@angular/core';
import { Movie } from '../model/movie';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  count: number;
  allMovies = [];
  userSubject = new BehaviorSubject(null);
  public getFilteredMovie = new Subject<any>();

  constructor() { }

  //Below function is adding movie details to localStorage and maintain movie Id.
  createMovie(data: Movie) {
    let movieList = [];
    movieList = JSON.parse(localStorage.getItem('MovieDetails'));
    if (movieList == null) {
      this.count = 0;
    }
    else {
      this.count = movieList.length;
    }
    data.id = this.count + 1;
    if (movieList == null) {
      movieList = [data];
    }
    else {
      movieList = [...movieList, data];
    }
    localStorage.setItem('MovieDetails', JSON.stringify(movieList));
  }

  //Getting movies from localStorage
  getAllMovies() {
    this.userSubject.next(JSON.parse((localStorage.getItem('MovieDetails'))));
  }

  //Deletes movies from the localStorage based on the movieId passed and modifies the object.
  deleteMovie(movieId: number) {
    const list = JSON.parse(localStorage.getItem('MovieDetails'));
    this.allMovies = list.filter(movieList => movieList.id != movieId);
    this.userSubject.next(localStorage.setItem('MovieDetails', JSON.stringify(this.allMovies)));
  }

  // searchMovie(event: string): Observable<Array<Movie>> {
  //   const search = JSON.parse(localStorage.getItem('MovieDetails'));
  //   return this.allMovies = search.filter(movieList => movieList.movieName != event);
  // }

  //Searches from the list of movies based on input string.
  searchMovieName(event: any): Observable<Array<Movie>> {
    const search = JSON.parse(localStorage.getItem('MovieDetails'));
    const filtered = search.filter((search) =>
      search.movieName.toLowerCase().match(event)
    );
    this.getFilteredMovie.next(filtered);
    return filtered

  }
}
