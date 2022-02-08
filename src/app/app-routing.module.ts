import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
 { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
 {path:'dashboard', component: DashboardComponent},
  //  {
  //   path: 'dashboard',
  //   loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  //  },
  {
    path: 'add-movie',
    loadChildren: () => import('./add-movie/add-movie.module').then(m => m.AddMovieModule)
 },
 {
  path: 'movie-detail',
  loadChildren: () => import('./movie-detail/movie-detail.module').then(m => m.MovieDetailModule)
},
{
  path: 'show-movie',
  loadChildren: () => import('./show-movie/show-movie.module').then(m => m.ShowMovieModule)
},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
