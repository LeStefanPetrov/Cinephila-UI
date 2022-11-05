import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../models/movie.model';
@Injectable()
export class MoviesService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    params: { page: 1, size: 8 },
  };

  getMovies() {
    return this.http
      .get<Movie[]>(environment.apiUrl + 'productions', this.httpOptions)
      .pipe(
        map((movies) => {
          return movies.map((movie) => {
            return {
              name: movie.name,
              posterPath: movie.posterPath,
              yearOfCreation: movie.yearOfCreation,
            };
          });
        })
      );
  }
}
