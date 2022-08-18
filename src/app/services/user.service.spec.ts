import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { lastValueFrom, of } from 'rxjs';
import { mockUserData } from './user.service.mock';

// can extract this to common place
export const httpSpy: any = {
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  delete: jest.fn(),
}

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    service = new UserService(httpSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be get User', () => {
    httpSpy.get.mockReturnValue(of(mockUserData));

    expect(lastValueFrom(service.getUser())).resolves.toEqual(mockUserData);
    expect(httpSpy.get).toBeCalled();
  });

  it('should update User', () => {
    httpSpy.put.mockReturnValue(of(mockUserData));

    expect(lastValueFrom(service.updateUser(mockUserData))).resolves.toEqual(mockUserData);
    expect(httpSpy.put).toBeCalledWith('/user', {user: mockUserData});

  });

  it('should add User', () => {
    httpSpy.post.mockReturnValue(of(mockUserData));

    expect(lastValueFrom(service.addUser(mockUserData))).resolves.toEqual(mockUserData);
    expect(httpSpy.post).toBeCalledWith('/user', {user: mockUserData});

  });
});
