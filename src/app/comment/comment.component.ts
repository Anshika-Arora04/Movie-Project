import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../model/movie';
import { MovieService } from '../services/movie.service';
import { NotifierService } from '../services/notifier.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comment: string = "";
  postComment = [];
  movies: any;
  movie: Movie[];
  users: any = [];
  currentMovieId: string = '';
  constructor(private movieService: MovieService, private route: Router, private notifier: NotifierService) { }


  ngOnInit(): void {

    this.currentMovieId = localStorage.getItem('currentMovieId');
    let comment = JSON.parse(localStorage.getItem('Comment'));
    this.postComment = comment?.filter(movie => movie.movieId == this.currentMovieId);
    this.users = JSON.parse(localStorage.getItem('Users'));

  }

  post(userComment: any) {

    let token = localStorage.getItem('token');
    if (token == null) {
      this.notifier.showNotification('Please login first', 'Dismiss');
      this.route.navigate(['/login'])
    }
    this.movies = JSON.parse(localStorage.getItem('MovieDetail'));
    const tokenEmail = localStorage.getItem('token');
    const userData = this.users.find(e => e.email === tokenEmail);
    const review = {
      userId: userData.userId,
      movieId: localStorage.getItem('currentMovieId'),
      postComment: userComment,
      commentTime: new Date(),
    }
    this.movieService.reviewMovie(review);
    let comment = JSON.parse(localStorage.getItem('Comment'));
    this.postComment = comment.filter(movie => movie.movieId == this.currentMovieId);
    this.comment = '';
  }

  getUserNameById(id: string) {
    var commentUser = this.users.find(e => e.userId === id)
    return commentUser.name;
  }

}
