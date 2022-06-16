import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GoogleOAuthService } from '../OAuth/oauth.service';

@Injectable()
export class MoviesService {
  constructor(
    private http: HttpClient,
    private readonly oauthService: GoogleOAuthService
  ) {}

  httpOptions = {
    params: { page: 1, size: 10 },
  };

  getMovies() {
    return this.http.get<any>(
      environment.apiUrl + 'productions',
      this.httpOptions
    );
  }
}
