import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferToBusinessComponent } from './transfer-to-business.component';

describe('TransferToBusinessComponent', () => {
  let component: TransferToBusinessComponent;
  let fixture: ComponentFixture<TransferToBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferToBusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferToBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
