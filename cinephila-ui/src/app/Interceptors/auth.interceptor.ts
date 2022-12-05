import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private oauthService: OidcSecurityService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!req.url.includes('localhost')) return next.handle(req);
    
    let token;
    this.oauthService.getIdToken().subscribe((response) => {
      token = response;
    });
    
    if (token != null) {
      const modifiedRequest = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`),
      });
      
      return next.handle(modifiedRequest);
    } 

    return next.handle(req);
  }
}
