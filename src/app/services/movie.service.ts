import { Injectable } from '@angular/core';
import { Movie } from '../model/movie';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
count : number;
allMovies = [];
userSubject = new BehaviorSubject(null);


  constructor() { }

  createMovie(data:Movie){
    let movieList = [];
    movieList =  JSON.parse(localStorage.getItem('MovieDetails')) ;
    if(movieList == null){
      this.count=0;
    }
    else{
    this.count = movieList.length;
    }
    data.id = this.count+1;
    if(movieList == null){
      movieList = [data];
    }
    else{
      movieList = [...movieList, data];
    }

    localStorage.setItem('MovieDetails', JSON.stringify(movieList));
  }


  getAllMovies(){
    this.userSubject.next(JSON.parse(localStorage.getItem('MovieDetails')));
  }

  deleteMovie(movieId: number){
    const list = JSON.parse(localStorage.getItem('MovieDetails'));
    this.allMovies = list.filter(movieList => movieList.id!= movieId);
    this.userSubject.next(localStorage.setItem('MovieDetails',JSON.stringify(this.allMovies)));
  }

  }

