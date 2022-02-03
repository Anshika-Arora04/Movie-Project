import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { ConfirmedValidator } from './confirmed.validator';
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/services/notifier.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formNotSubmitted: boolean = false;
  passwordNotSubmitted = false;

  get Error() {
    return this.signUpForm.controls;
  }

  user: User;


  constructor(private formBuilder: FormBuilder, private notifier: NotifierService, private userService: UserService, private route: Router) { }

  signUpForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), Validators.maxLength(320)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required]
  },
    {
      validator: ConfirmedValidator('password', 'confirmPassword')
    }
  );


  ngOnInit(): void {

  }
  onSignIn() {
    let userDetails = {
      name: this.signUpForm.get('name').value,
      email: this.signUpForm.get('email').value,
      password: this.signUpForm.get('password').value,
      confirmPassword: this.signUpForm.get('confirmPassword').value,
      role: "USER",
      userId: "2",
    }
    console.log(userDetails);

    //Stores user data in local storage at the time of signIn :
    localStorage.setItem('User', JSON.stringify(userDetails));
    if (this.signUpForm.valid) {
      this.userService.addUser(userDetails);
      this.signUpForm.reset();
      this.notifier.showNotification("You are successfully registered.", "Dismiss")
      this.route.navigate(['/login']);
    } else {
      this.notifier.showNotification("Oops! Something went wrong,try again.", "Dismiss");
      this.formNotSubmitted = true;
      if (userDetails.confirmPassword == null) {
        this.passwordNotSubmitted = true;
      }
    }
  }
}

