import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';
import { routes } from './app.routing';

import { SessionService } from './services/session.service';
import { NewspaperService } from './services/newspaper.service';
import { NewsApi } from './services/newsApi.service';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { ListNewspapersComponent } from './components/newspapers/list-newspapers/list-newspapers.component';
import { MyNewspapersComponent } from './components/newspapers/my-newspapers/my-newspapers.component';
import { ArticlesComponent } from './components/newspapers/articles/articles.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ListNewspapersComponent,
    MyNewspapersComponent,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [
    SessionService,
    NewspaperService,
    NewsApi
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
