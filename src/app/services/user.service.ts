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
    debugger;
    let users = JSON.parse(localStorage.getItem('Users'));
    if (localStorage.getItem('Users')) {
      if (user.email != "admin@gmail.com") {
        const userData = users.find(e => e.email === user.email);
        if (userData != undefined && userData.email == user.email) {
          this.notifier.showNotification("already register user", "Dismiss");
        }
        else {
          let userList = JSON.parse(localStorage.getItem('Users'));
          if (userList != null) {
            user.userId = (+userList[userList.length - 1].userId + 1).toString();
          }
          users = [...users, user];
          localStorage.setItem('Users', JSON.stringify(users));
          this.notifier.showNotification("You are successfully registered.", 'OK');
          this.route.navigate(['/login']);
        }
      } else {
        const userData = users.find(e => e.email === user.email);
        if (userData != undefined && userData.email == user.email) {

        } else {
          let userList = JSON.parse(localStorage.getItem('Users'));
          if (userList != null) {
            user.userId = (+userList[userList.length - 1].userId + 1).toString();
          }
          users = [...users, user];
          localStorage.setItem('Users', JSON.stringify(users));
        }
      }
    } else {
      users = [user];
      localStorage.setItem('Users', JSON.stringify(users));
    }
  }
}
