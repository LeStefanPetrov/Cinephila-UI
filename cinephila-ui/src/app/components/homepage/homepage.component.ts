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
  currdeg: number = 0;
  currentSlide = 2;

  constructor(private readonly moviesService: MoviesService) {
    this.moviesService.getMovies().subscribe((movies) => {
      this.movies = movies;
    });
  }

  ngOnInit(): void {}

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.movies.length - 1 : previous;
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.movies.length ? 0 : next;
  }
}
