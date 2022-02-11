import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizeTransactionComponent } from './authorize-transaction.component';

describe('AuthorizeTransactionComponent', () => {
  let component: AuthorizeTransactionComponent;
  let fixture: ComponentFixture<AuthorizeTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorizeTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizeTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
