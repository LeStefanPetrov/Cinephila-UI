import { NgModule } from '@angular/core';
import { AuthModule } from 'angular-auth-oidc-client';


@NgModule({
    imports: [AuthModule.forRoot({
        config: {
              authority: 'https://accounts.google.com',
              redirectUrl: window.location.origin + '/callback',
              postLogoutRedirectUri: window.location.origin,
              clientId:  '21758989588-o99527rg1tidhva82aigfg1u6ku81b6q.apps.googleusercontent.com',
              scope: 'openid email profile',
              responseType: 'id_token token',
          }
      })],
    exports: [AuthModule],
})
export class AuthConfigModule {}
