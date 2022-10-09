import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from 'src/app/models/movie.model';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css', '../../../styles.css'],
})
export class HomepageComponent implements OnInit {
  movies: Movie[] = [];
  constructor(private readonly moviesService: MoviesService) {
    this.moviesService.getMovies().subscribe((movies) => {
      this.movies = movies;
      console.log(this.movies);
    });
  }

  ngOnInit(): void {}
}
