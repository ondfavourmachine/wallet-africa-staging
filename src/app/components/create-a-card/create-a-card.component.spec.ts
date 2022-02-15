import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateACardComponent } from './create-a-card.component';

describe('CreateACardComponent', () => {
  let component: CreateACardComponent;
  let fixture: ComponentFixture<CreateACardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateACardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateACardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
