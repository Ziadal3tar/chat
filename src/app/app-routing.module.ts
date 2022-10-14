import { LoginGuard } from './services/login.guard';
import { HomeComponent } from './component/home/home.component';
import { SignupComponent } from './component/signup/signup.component';
import { LoginComponent } from './component/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'regester', component: SignupComponent },
  { path: 'home',canActivate:[LoginGuard], component: HomeComponent },

  // { path: 'userinfo/settings', canActivate: [LogingurdGuard], component: UserinfoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
