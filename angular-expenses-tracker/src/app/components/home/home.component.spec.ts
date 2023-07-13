import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { BalanceComponent } from '../balance/balance.component';
import { HomeComponent } from './home.component';
import { TransactionsComponent } from '../transactions/transactions.component';
import { Transaction } from '../../models/transaction.model';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let compiled: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [HomeComponent, BalanceComponent, TransactionsComponent],
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a div with css class main', () => {
    const div = compiled.querySelector('.main');
    expect(div).toBeTruthy();
  });

  it('should calculate the balance based on transactions', () => {
    const dummyTransactions: Transaction[] = [
      {
        id: '1',
        type: 'income',
        amount: 500,
        category: 'payroll',
        date: new Date(),
      },
      {
        id: '2',
        type: 'expense',
        amount: 100,
        category: 'entertainment',
        date: new Date(),
      },
      {
        id: '3',
        type: 'expense',
        amount: 200,
        category: 'food',
        date: new Date(),
      },
    ];

    component.transactions = dummyTransactions;
    component.calculateBalance();
    expect(component.balance.income).toBe(500);
    expect(component.balance.expenses).toBe(300);
    expect(component.balance.amount).toBe(200);
  });
});
