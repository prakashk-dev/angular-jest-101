import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { User } from './services/user.model';
import { MockUserService } from './services/user.service.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-jest';
  user?: User;

  constructor(private userService: MockUserService) {}

  ngOnInit(): void {
    this.userService
      .getUser()
      .pipe(take(1))
      .subscribe((user: User) => {
        this.user = user;
      });
  }
}
