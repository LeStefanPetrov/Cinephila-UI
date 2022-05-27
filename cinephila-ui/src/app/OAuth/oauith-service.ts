import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';

const oAuthConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  strictDiscoveryDocumentValidation: false,
  redirectUri: window.location.origin,
  clientId:
    '21758989588-o99527rg1tidhva82aigfg1u6ku81b6q.apps.googleusercontent.com',
  scope: 'openid profile email',
};

@Injectable({
  providedIn: 'root',
})
export class GoogleOAuthService {
  constructor(
    private readonly oauthService: OAuthService,
    private http: HttpClient
  ) {
    this.oauthService = oauthService;
    this.Configure();
  }

  Configure() {
    this.oauthService.configure(oAuthConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  Login() {
    this.oauthService.initLoginFlow();
  }

  Logout() {
    this.oauthService.revokeTokenAndLogout();
    this.oauthService.logOut();
  }

  CheckLoggedIn() {
    return this.oauthService.hasValidAccessToken();
  }
}
