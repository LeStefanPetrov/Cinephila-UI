import { Component, OnInit } from '@angular/core';
import { GoogleOAuthService } from '../OAuth/oauth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../../styles.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private readonly googleOAuth: GoogleOAuthService) {}
  ngOnInit(): void {}

  Login() {
    this.googleOAuth.Login();
  }
  Logout() {
    this.googleOAuth.Logout();
  }

  get isLogged() {
    return this.googleOAuth.CheckLoggedIn();
  }
}
