import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css', '../../../styles.css'],
    standalone: false
})
export class HeaderComponent implements OnInit {
  user$: Observable<boolean> = new Observable<boolean>();
  isAuthenticated = false;

  constructor(private readonly googleOAuth: OidcSecurityService) {}

  ngOnInit(): void {
    this.googleOAuth.checkAuth().subscribe(({ isAuthenticated }) => {
      this.isAuthenticated = isAuthenticated;
    });
  }

  Login() {
    this.googleOAuth.authorize();
  }
  Logout() {
    this.googleOAuth.logoffLocal();
    this.isAuthenticated = false;
  }

  get isLogged() {
    return this.isAuthenticated;
  }
}
