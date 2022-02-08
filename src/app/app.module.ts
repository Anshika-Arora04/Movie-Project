import { NgModule } from '@angular/core';
import "@angular/compiler";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './user/signup/signup.component';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { AddMovieModule } from './add-movie/add-movie.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ShowMovieModule } from './show-movie/show-movie.module';
import { MovieDetailModule } from './movie-detail/movie-detail.module';
import { SharedModule } from './shared/shared.module';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AddMovieModule,
    DashboardModule,
    ShowMovieModule,
    MovieDetailModule,
  ],
  providers: [
    AuthService,
    UserService,
  ],
  bootstrap: [AppComponent],
  //entryComponents: [MatConfirmDialogComponent]
})
export class AppModule { }
