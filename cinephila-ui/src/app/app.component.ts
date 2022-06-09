import { Component } from '@angular/core';
import { GoogleOAuthService } from './OAuth/oauth.service';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../styles.css'],
})
export class AppComponent {
  title = 'cinephila-ui';

  constructor(
    private readonly googleOAuth: GoogleOAuthService,
    private readonly moviesService: MoviesService
  ) {
    moviesService
      .getMovies()
      .subscribe((responseData) => console.log(responseData));
  }

  Login() {
    this.googleOAuth.Login();
  }
  Logout() {
    this.googleOAuth.Logout();
  }
}
