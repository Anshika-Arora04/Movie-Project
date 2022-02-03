import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Movie } from '../model/movie';
import { MovieService } from '../services/movie.service';
import { NotifierService } from '../services/notifier.service';

@Component({
  selector: 'app-show-movie',
  templateUrl: './show-movie.component.html',
  styleUrls: ['./show-movie.component.css']
})
export class ShowMovieComponent implements OnInit {



  movies: Movie[] = [];
  name: string;
  message: any;


  constructor(private movieService: MovieService, private notifier: NotifierService) { }

  ngOnInit(): void {
    this.getAllMovie();
  }

  searchMovie = new FormGroup({
    name: new FormControl(),

  });

  getAllMovie() {
    this.movieService.getAllMovies();
    this.movieService.userSubject.subscribe(data => {
      this.movies = data;
    });

  }

  //Deletes the movie and shows the notification after deleting.
  deleteMovie(movieId: Movie) {
    this.notifier.showDialogConfirmation("Are you sure you want to delete?")
      .afterClosed().subscribe(response => {
        if (response) {
          this.notifier.showNotification("Delete successfully !!", "OK")
          this.movieService.deleteMovie(movieId.id);
          this.movieService.userSubject.subscribe(data => {
            this.movies = data;
          })
        }
        this.ngOnInit();
      });
  }
}

