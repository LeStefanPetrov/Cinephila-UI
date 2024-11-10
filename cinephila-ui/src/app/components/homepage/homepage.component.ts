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
  currentSlide = 0;
  leftTwoSlide = 0;
  leftOneSlide = 0;
  rightOneSlide = 0;
  rightTwoSlide = 0;
  constructor(
    private readonly moviesService: MoviesService,
    private readonly usersService: UsersService,
    private router: Router
  ) {
    this.moviesService.getMovies().subscribe((movies) => {
      this.movies = movies;
      this.updateIndices(); // Initialize all slide positions
    });
    this.usersService.getUser().subscribe((response) => {
      if (response.status === 201) this.router.navigate(['/profile']);
    });
  }

  ngOnInit(): void {}

  private updateIndices() {
    const length = this.movies.length;

    this.leftTwoSlide = (this.currentSlide - 2 + length) % length;
    this.leftOneSlide = (this.currentSlide - 1 + length) % length;
    this.rightOneSlide = (this.currentSlide + 1) % length;
    this.rightTwoSlide = (this.currentSlide + 2) % length;
  }

  onPreviousClick() {
    // Move currentSlide backward by one and update other indices
    this.currentSlide =
      (this.currentSlide - 1 + this.movies.length) % this.movies.length;
    this.updateIndices();
  }

  onNextClick() {
    // Move currentSlide forward by one and update other indices
    this.currentSlide = (this.currentSlide + 1) % this.movies.length;
    this.updateIndices();
  }
}
