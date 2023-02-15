import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from 'src/app/models/movie.model';
import { scaleIn, scaleOut } from '../../animations/carousel.animations';
import { transition, trigger, useAnimation } from '@angular/animations';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css', '../../../styles.css'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        useAnimation(scaleIn, { params: { time: '1300ms' } }),
      ]),
      transition('* => void', [
        useAnimation(scaleOut, { params: { time: '1300ms' } }),
      ]),
    ]),
  ],
})
export class HomepageComponent implements OnInit {
  movies: Movie[] = [];
  previousSlide = 0;
  currentSlide = 1;
  nextSlide = 2;

  constructor(
    private readonly moviesService: MoviesService,
    private readonly usersService: UsersService,
    private router: Router
  ) {
    this.moviesService.getMovies().subscribe((movies) => {
      this.movies = movies;
    });
    this.usersService.getUser().subscribe((response) => {
      if (response.status === 201) this.router.navigate(['/profile']);
    });
  }

  ngOnInit(): void {}

  onPreviousClick() {
    this.nextSlide = this.currentSlide;
    const previous =
      this.currentSlide - 1 < 0
        ? this.movies.length - 1
        : this.currentSlide - 1;
    this.currentSlide = previous;
    this.previousSlide =
      previous - 1 < 0 ? this.movies.length - 1 : previous - 1;
  }

  onNextClick() {
    this.previousSlide = this.currentSlide;
    const next =
      this.currentSlide + 1 === this.movies.length ? 0 : this.currentSlide + 1;
    this.currentSlide = next;
    this.nextSlide = next + 1 === this.movies.length ? 0 : next + 1;
  }
}
