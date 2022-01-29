import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Movie } from '../model/movie';
import { MovieService } from '../services/movie.service';
import { NotifierService } from '../services/notifier.service';

@Component({
  selector: 'app-show-movie',
  templateUrl: './show-movie.component.html',
  styleUrls: ['./show-movie.component.css']
})
export class ShowMovieComponent implements OnInit {

  // movies: [];
  movies: Movie[]= [];
  name:string;
  message: any;

  constructor(private movieService: MovieService, private route: Router,
     private matDialog: MatDialog, private notifier: NotifierService) { }

  ngOnInit(): void {
    this.getAllMovie();
  }

  searchMovie = new FormGroup({
    name:new FormControl(),

  });

  getAllMovie(){
    this.movieService.getAllMovies();
      this.movieService.userSubject.subscribe(data=>{
     this.movies = data;
    });

  }


    // this.subscribe.push(this.movieService.getAllMovies().subscribe(
    //   data=>{
    //     this.movies = JSON.parse(JSON.stringify(data));
    //   }
    // ));

    // this.movieService.getAllMovies().subscribe((data: Movie[])=>{
    //   JSON.stringify(data)
    //  console.log(data);
    //   this.movies = data;
    // },
    // (err: HttpErrorResponse) => {
    //     console.log("failed")
    // });

    deleteMovie(movieId: Movie){
    this.notifier.showDialogConfirmation("Are you sure you want to delete?")
    .afterClosed().subscribe(response =>{
      if(response){
        this.notifier.showNotification("Delete successfully !!","OK")
        this.movieService.deleteMovie(movieId.id);
        this.movieService.userSubject.subscribe(data=>{
          this.movies = data;
        })
      }
      this.ngOnInit();
    });
  }
}

