import { Injectable } from '@angular/core';
import { Movie } from '../model/movie';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  count: number;
  allMovies = [];
  commentList = [];
  ratingList = [];
  userSubject = new BehaviorSubject(null);
  public getFilteredMovie = new Subject<any>();
  users: any = [];
  public currentMovieRateByUser = new BehaviorSubject(null);
  public averageRateSubject = new BehaviorSubject(null);
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

  rateMovie(data: any) {
    this.ratingList = JSON.parse(localStorage.getItem('UserRating'));
    if (this.ratingList == null) {
      this.ratingList = [data];
    } else {
      // check if rtating available for same user
      let rate = this.ratingList.find(e => e.movieId === data.movieId && e.userId === data.userId);
      if (rate != null) {
        this.ratingList.forEach(function (e) {
          if (e.movieId == data.movieId && e.userId == data.userId) {
            e.movieRate = data.movieRate;
          }
        });
      } else {
        this.ratingList = [...this.ratingList, data];
      }
    }

    localStorage.setItem('UserRating', JSON.stringify(this.ratingList));
  }

  getMoviesRating() {
    let token = localStorage.getItem('token');
    if (token == null) {
      return;
    }
    this.users = JSON.parse(localStorage.getItem('Users'));
    const userData = this.users.find(e => e.email === token);
    // Now save rating details based on login user id and current movie id
    // this.movies = JSON.parse(localStorage.getItem('MovieDetail'));
    let movieId = localStorage.getItem('currentMovieId');
    let allRating = JSON.parse(localStorage.getItem('UserRating'));
    const curentMovieRateAsPerUser = allRating.find(e => e.userId === userData.userId && e.movieId === movieId);
    this.currentMovieRateByUser.next(curentMovieRateAsPerUser);
    this.getAverageRating();
  }

  getAverageRating() {
    debugger;
    let allRating = JSON.parse(localStorage.getItem('UserRating'));
    let currentMovieId = localStorage.getItem('currentMovieId');
    var rateSum = 0;
    allRating = allRating.filter(e => e.movieId == currentMovieId);
    var numberOfRating = allRating.length;
    if (numberOfRating == 0) {
      return;
    }
    allRating.forEach(element => {
      rateSum += element.movieRate;
    });
    this.averageRateSubject.next(rateSum / numberOfRating);
  }

  reviewMovie(data: any) {
    this.commentList = JSON.parse(localStorage.getItem('Comment'));
    if (this.commentList == null) {
      this.commentList = [data];
    } else {
      this.commentList = [...this.commentList, data];
    }
    localStorage.setItem('Comment', JSON.stringify(this.commentList));
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
