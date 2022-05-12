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
export class GoogleApiService {
  constructor(private readonly oauthService: OAuthService) {
    oauthService.configure(oAuthConfig);
    oauthService.loadDiscoveryDocument().then(() => {
      oauthService.tryLoginImplicitFlow().then(() => {
        if (!oauthService.hasValidAccessToken()) {
          oauthService.initLoginFlow();
        } else {
          oauthService.loadUserProfile().then((userProfile) => {
            console.log(JSON.stringify(userProfile));
          });
        }
      });
    });
  }
}
