import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../model/user';
import { NotifierService } from '../services/notifier.service';
import { Movie } from '../model/movie';
import { MovieService } from '../services/movie.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {


  user: User;
  role: string;
  search: Movie[];
  movies: Observable<Array<Movie>>
  searchName: string;


  constructor(private notifier: NotifierService, private route: Router, private movieService: MovieService) { }

  ngOnInit(): void {
    this.role = localStorage.getItem('role');
    console.log(this.role);

  }

  loggedIn() {
    let UserArray = [];
    if (localStorage.getItem('Users')) {
      UserArray = JSON.parse(localStorage.getItem('Users'));
    }
    var loggedInUser = localStorage.getItem('token');
    this.user = UserArray.find(check => check.email === loggedInUser)
    return this.user;
  }

  getSearchResults() {
    this.movies = this.movieService.searchMovieName(this.searchName);
  }

  onLogOut() {
    this.notifier.showNotification("You're successfully logged out", "Dismiss");
    this.route.navigate(['dashboard']);
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.ngOnInit();

  }
  goToDashboard(){
    this.route.navigate(['dashboard']);
  }
  goToLogin(){
    this.route.navigate(['login'])
  }
  goToSignUp(){
    this.route.navigate(['signup'])
  }
  goToAddMovie(){
    this.route.navigate(['add-movie'])
  }
  goToShowMovie(){
    this.route.navigate(['show-movie'])
  }
}
