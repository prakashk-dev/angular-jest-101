import { UserService } from "../app/services/user.service";
import { MockUserService } from "../app/services/user.service.mock";

export const environment = {
  production: true,
  providers: [
    {
      provide: MockUserService, useValue: UserService
    }
  ]
};
