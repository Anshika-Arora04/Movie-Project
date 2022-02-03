import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { NotifierService } from 'src/app/services/notifier.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isAuth = false;
  formNotSubmitted: boolean = false;

  get Error() {
    return this.loginForm.controls;
  }

  constructor(private formBuilder: FormBuilder, private notifier: NotifierService, private userService: UserService, private router: Router, private authService: AuthService) {
    // if(this.formNotSubmitted)
    // {
    //   console.log("hellooooo")
    //   setTimeout(
    //   ()=>{
    //    this.isAuth=true;
    //  }, 5000);
    // }
    // this.isAuth = false;
  }
  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), Validators.maxLength(320)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  ngAfterViewInit() {
    // Static Admin Credentials:
    let adminDetail = {
      name: "Admin",
      email: "admin@gmail.com",
      password: "admin@123",
      confirmPassword: "admin@123",
      role: "ADMIN",
      userId: "1",
    }
    this.userService.addUser(adminDetail);
  }
  ngOnInit(): void {

  }

  onLogin() {
    console.log(this.loginForm.value);
    const token = this.authService.authUser(this.loginForm.value);
    if (token) {
      localStorage.setItem('token', token.email);
      localStorage.setItem('role', token.role);
      this.notifier.showNotification('Login Successfull', 'Dismiss');
      this.router.navigate(['/']);
    } else {
      this.formNotSubmitted = true;
      this.notifier.showNotification('Oops! Something went wrong. Please try again', "Dismiss");
    }
  }
}

