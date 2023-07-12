import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Transaction } from '../../models/transaction.model';
import { TransactionsComponent } from './transactions.component';
import { TransactionComponent } from '../transaction/transaction.component';

describe('TransactionsComponent', () => {
  let component: TransactionsComponent;
  let fixture: ComponentFixture<TransactionsComponent>;
  let compiled: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionsComponent, TransactionComponent],
    });
    fixture = TestBed.createComponent(TransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display "No hay transacciones" if no transactions provided', () => {
    const title = compiled.querySelector('h2');
    expect(title?.textContent).toBe('No hay transacciones');
  });

  it('should display all transactions', () => {
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
    // Modifica la propiedad transactions del componente
    component.transactions = dummyTransactions;
    fixture.detectChanges();

    // Prueba de HTML
    const appTransactionElements =
      compiled.getElementsByTagName('app-transaction');
    expect(appTransactionElements.length).toBe(dummyTransactions.length);

    // Prueba de clases CSS
    const iconElements = compiled.querySelectorAll('.transaction__icon');
    expect(iconElements[0]).toHaveClass('transaction__income-icon');
    expect(iconElements[1]).toHaveClass('transaction__expense-icon');
    expect(iconElements[2]).toHaveClass('transaction__expense-icon');
  });
});
