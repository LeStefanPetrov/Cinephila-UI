import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient, private readonly router: Router) {}
  getUser() {
    return this.http.get<User>(environment.apiUrl + 'users/profileInfo', {
      observe: 'response',
    });
  }
}
