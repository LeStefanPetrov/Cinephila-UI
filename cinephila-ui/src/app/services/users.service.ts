import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable()
export class UsersService {
  profileInfo = new Observable<User>();

  constructor(private http: HttpClient) {}
  getUser() {
    var response = this.http.get<User>(
      environment.apiUrl + 'users/profileInfo',
      {
        observe: 'response',
      }
    );

    response.subscribe((res) => {
      this.profileInfo =
        res.body != null
          ? new BehaviorSubject(res.body).asObservable()
          : new BehaviorSubject(new User()).asObservable();
    });

    return response;
  }
}
