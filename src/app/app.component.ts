import { Component } from '@angular/core';
import { SessionService } from './services/session.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user = {};
  username = localStorage.getItem("user");

  constructor(
    private session: SessionService
  ) { }

  ngOnInit() {
    this.session.getUser();
  }

  logout() {
    this.session.logout();
  }
}
