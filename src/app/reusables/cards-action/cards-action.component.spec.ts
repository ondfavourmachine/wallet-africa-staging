import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsActionComponent } from './cards-action.component';

describe('CardsActionComponent', () => {
  let component: CardsActionComponent;
  let fixture: ComponentFixture<CardsActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
