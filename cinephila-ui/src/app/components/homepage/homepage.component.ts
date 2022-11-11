import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from 'src/app/models/movie.model';
import { GoogleOAuthService } from 'src/app/OAuth/oauth.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css', '../../../styles.css'],
})
export class HomepageComponent implements OnInit {
  movies: Movie[] = [];
  constructor(private readonly moviesService: MoviesService , private readonly oauthService: GoogleOAuthService) {
    
    this.moviesService.getMovies().subscribe((movies) => {
      this.movies = movies;
    });
  }

  ngOnInit(): void {}
}
