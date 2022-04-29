import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessOnboardingHomeComponent } from './business-onboarding-home.component';

describe('BusinessOnboardingHomeComponent', () => {
  let component: BusinessOnboardingHomeComponent;
  let fixture: ComponentFixture<BusinessOnboardingHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessOnboardingHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessOnboardingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
