import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Router } from '@angular/router';
import { NotifierService } from './notifier.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private route: Router, private notifier: NotifierService) { }

  //Checks if a user is already registered or not, if not then adds the user
  addUser(user: User) {
    let users = [];
    if (localStorage.getItem('Users')) {
      if (user.email != "admin@gmail.com") {
        users = JSON.parse(localStorage.getItem('Users'));
        const userData = users.find(e => e.email === user.email);
        if (userData != undefined && userData.email == user.email) {
          this.notifier.showNotification("already register user", "Dismiss");
        }
        else {
          users = [...users, user];
          localStorage.setItem('Users', JSON.stringify(users));
          this.notifier.showNotification("You are successfully registered.", 'OK');
          this.route.navigate(['/login']);
        }
      }
    } else {
      users = [user];
      localStorage.setItem('Users', JSON.stringify(users));
    }
  }
}
