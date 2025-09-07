import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css'],
    standalone: false
})
export class ProfileComponent implements OnInit {
  userInfo: User = new User();

  constructor(private readonly usersService: UsersService) {
    this.usersService.profileInfo.subscribe((info) => {
      this.userInfo = info;
    });
  }

  ngOnInit(): void {}
}
