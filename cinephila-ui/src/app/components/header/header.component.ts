import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleOAuthService } from '../../OAuth/oauth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../../../styles.css'],
})
export class HeaderComponent implements OnInit {
  user$: Observable<boolean> = new Observable<boolean>();
  constructor(private readonly googleOAuth: GoogleOAuthService) {
    this.user$ = googleOAuth.user$.asObservable();
  }
  ngOnInit(): void {}

  Login() {
    this.googleOAuth.Login();
  }
  Logout() {
    this.googleOAuth.Logout();
  }
}
