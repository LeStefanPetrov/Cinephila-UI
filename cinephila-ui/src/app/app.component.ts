import { Component } from '@angular/core';
import { GoogleOAuthService } from './OAuth/oauith-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cinephila-ui';

  constructor(private readonly googleOAuth: GoogleOAuthService) {}

  Login() {
    this.googleOAuth.Login();
  }
  Logout() {
    this.googleOAuth.Logout();
  }
}
