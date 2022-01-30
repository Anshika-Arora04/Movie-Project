import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { ShowMovieComponent } from './show-movie/show-movie.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/add-movie', component: AddMovieComponent },
  { path: 'dashboard/add-movie/show-movie', component: ShowMovieComponent },
  { path: 'dashboard/show-movie/dashboard', component: DashboardComponent },
  { path: 'dashboard/add-movie/dashboard', component: DashboardComponent },
  { path: 'dashboard/show-movie/add-movie', component: AddMovieComponent },
  { path: 'dashboard/show-movie', component: ShowMovieComponent },
  { path: 'dashboard/login', component: LoginComponent },
  { path: 'movie-detail', component: MovieDetailComponent },
  { path: 'dashboard/signup', component: SignupComponent },
  { path: 'show-movie', component: ShowMovieComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/signup', component: SignupComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signup/login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
