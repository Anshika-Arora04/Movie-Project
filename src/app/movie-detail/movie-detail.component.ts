import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

 movies: Movie[];
 movie: any;
  constructor() { }

  ngOnInit(): void {

   this.movie =  JSON.parse(localStorage.getItem('MovieDetail'));
   console.log(this.movie);
  }


}
