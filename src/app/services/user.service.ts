import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user.model';
import { IUserService } from './user.service.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService implements IUserService {

  constructor(private http: HttpClient) { }
  getUser(): Observable<User> {
    return this.http.get('/user') as Observable<User>;
  }
  updateUser(user: User): Observable<User> {
    return this.http.put('/user', { user }) as Observable<User>;
  }
  addUser(user: User): Observable<boolean> {
    return this.http.post('/user', { user }) as Observable<boolean>;
  }
}
