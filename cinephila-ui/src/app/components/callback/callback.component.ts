import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css'],
})
export class CallbackComponent implements OnInit {
  constructor(
    private readonly googleOAuth: OidcSecurityService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.googleOAuth.checkAuth().subscribe(({ isAuthenticated }) => {
      if (!!isAuthenticated) this.router.navigate(['/']);
    });
  }
}
