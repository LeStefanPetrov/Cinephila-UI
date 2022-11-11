import { NgModule } from '@angular/core';
import { AuthModule } from 'angular-auth-oidc-client';


@NgModule({
    imports: [AuthModule.forRoot({
        config: {
              authority: 'https://accounts.google.com',
              redirectUrl: window.location.origin,
              postLogoutRedirectUri: window.location.origin,
              clientId:  '21758989588-o99527rg1tidhva82aigfg1u6ku81b6q.apps.googleusercontent.com',
              scope: 'openid profile email', // 'openid profile offline_access ' + your scopes
              responseType: 'code',
              silentRenew: true,
              useRefreshToken: true,
              renewTimeBeforeTokenExpiresInSeconds: 30,
          }
      })],
    exports: [AuthModule],
})
export class AuthConfigModule {}
