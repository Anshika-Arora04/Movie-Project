import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private route: Router) { }

  addUser(user: User) {
    let users = [];
    if (localStorage.getItem('Users')) {
      if (user.email != "admin@gmail.com") {
        users = JSON.parse(localStorage.getItem('Users'));
        const userData = users.find(e => e.email === user.email);
        if (userData!=undefined && userData.email == user.email ) {
          //this.alertify.error("already register user");
        }
        else {
          users = [...users, user];
          localStorage.setItem('Users', JSON.stringify(users));
        // this.snackBar.showNotification("You are successfully registered.")
          this.route.navigate(['/login']);
        }
      }
    } else {
      users = [user];
      localStorage.setItem('Users', JSON.stringify(users));
    }
  }
}
