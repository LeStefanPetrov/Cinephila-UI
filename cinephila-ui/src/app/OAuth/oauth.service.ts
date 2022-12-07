import { Injectable } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GoogleOAuthService {
  user$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private readonly oauthService: OidcSecurityService) {}

  Configure() {
    this.oauthService
      .checkAuth()
      .subscribe(({ isAuthenticated, userData, accessToken, idToken }) => {
        this.user$.next(isAuthenticated);
      });
  }

  Login() {
    this.oauthService.authorize();
  }

  Logout() {
    this.oauthService.logoff();
  }
}
