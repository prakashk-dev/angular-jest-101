import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MockUserService } from './services/user.service.mock';

describe('AppComponent', () => {
  let userServiceSpy: MockUserService;
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async () => {
    userServiceSpy = new MockUserService();
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [{
        provide: MockUserService, useValue: userServiceSpy
      }],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should fetch user on init', fakeAsync(() => {
    jest.spyOn(userServiceSpy, 'getUser');
    // same as calling ngOnInit - Not exactly :)
    fixture.detectChanges();
    // kind of like await, for this to use, you have to use fakeAsync
    tick();
    expect(userServiceSpy.getUser).toHaveBeenCalled();
    expect(app.user).not.toBeUndefined();
  }));

});
