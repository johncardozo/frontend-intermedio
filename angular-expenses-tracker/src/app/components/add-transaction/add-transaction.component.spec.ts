import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTransactionComponent } from './add-transaction.component';

describe('AddTransactionComponent', () => {
  let component: AddTransactionComponent;
  let fixture: ComponentFixture<AddTransactionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTransactionComponent]
    });
    fixture = TestBed.createComponent(AddTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
