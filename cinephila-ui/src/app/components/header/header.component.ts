import { Component, OnInit } from '@angular/core';
import { OidcClientNotification, OidcSecurityService, OpenIdConfiguration, UserDataResult } from 'angular-auth-oidc-client';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../../../styles.css'],
})
export class HeaderComponent implements OnInit {
  user$: Observable<boolean> = new Observable<boolean>();
  isAuthenticated = false;
  
  constructor(private readonly googleOAuth: OidcSecurityService) {
  }

  ngOnInit(): void {

    this.googleOAuth.isAuthenticated$.subscribe(({ isAuthenticated }) => {
      this.isAuthenticated = isAuthenticated;
      console.warn(this.googleOAuth.getConfiguration());
      console.warn(this.googleOAuth.getIdToken());
      console.warn(this.googleOAuth.getAccessToken());
      console.warn('authenticated: ', isAuthenticated);
    });
  }

  Login() {
    this.googleOAuth.authorize();
  }
  Logout() {
    this.googleOAuth.logoff();
  }
}
