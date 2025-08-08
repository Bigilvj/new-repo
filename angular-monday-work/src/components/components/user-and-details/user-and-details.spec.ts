import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAndDetails } from './user-and-details';

describe('UserAndDetails', () => {
  let component: UserAndDetails;
  let fixture: ComponentFixture<UserAndDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserAndDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAndDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
