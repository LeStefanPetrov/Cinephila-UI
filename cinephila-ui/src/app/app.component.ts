import { Component } from '@angular/core';
import { GoogleOAuthService } from './OAuth/oauth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css', '../styles.css'],
    standalone: false
})
export class AppComponent {
  constructor(private readonly googleOAuth: GoogleOAuthService) {}

  Login() {
    this.googleOAuth.Login();
  }
  Logout() {
    this.googleOAuth.Logout();
  }
}
