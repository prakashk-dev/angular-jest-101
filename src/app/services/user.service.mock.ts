import { Observable, of } from "rxjs";
import { User } from "./user.model";
import { IUserService } from "./user.service.interface";

export const mockUserData: User = {
  id:'1',
  name: 'Prakash',
  age: 34,
  phone: '+61415174274'
};

export class MockUserService implements IUserService {

  constructor() { }

  getUser(): Observable<User> {
    return of(mockUserData);
  }
  updateUser(_: User): Observable<User> {
    return of(mockUserData);
  }
  addUser(_: User): Observable<boolean> {
    return of(true);
  }
}
