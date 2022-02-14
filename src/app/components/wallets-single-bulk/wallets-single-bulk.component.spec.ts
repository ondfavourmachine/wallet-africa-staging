import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletsSingleBulkComponent } from './wallets-single-bulk.component';

describe('WalletsSingleBulkComponent', () => {
  let component: WalletsSingleBulkComponent;
  let fixture: ComponentFixture<WalletsSingleBulkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalletsSingleBulkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletsSingleBulkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
