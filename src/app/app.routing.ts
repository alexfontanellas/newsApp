import { Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { SessionService } from './services/session.service';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { ListNewspapersComponent } from './components/newspapers/list-newspapers/list-newspapers.component';
import { MyNewspapersComponent } from './components/newspapers/my-newspapers/my-newspapers.component';
import { ArticlesComponent } from './components/newspapers/articles/articles.component';




export const routes: Routes = [
  { path: '', component: HomeComponent , canActivate: [SessionService]},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'newspapers', component: ListNewspapersComponent, canActivate: [SessionService]},
  { path: 'my-newspapers', component: MyNewspapersComponent, canActivate: [SessionService]},
  { path: 'articles', component: ArticlesComponent, canActivate: [SessionService]}



];
