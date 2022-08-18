import { Observable } from "rxjs";
import {  User } from "./user.model";

export interface IUserService {
  getUser(): Observable<User>;
  updateUser(_: User): Observable<User>;
  addUser(_: User): Observable<boolean>;
}
