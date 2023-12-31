import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UserPageComponent } from './user-page.component';

describe('BoardUserComponent', () => {
  let component: UserPageComponent;
  let fixture: ComponentFixture<UserPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
