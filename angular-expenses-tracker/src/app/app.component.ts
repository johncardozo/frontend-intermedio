import { Component } from '@angular/core';
import { Balance } from './models/balance.model';
import { Transaction } from './models/transaction.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  balance: Balance = {
    amount: 100_000,
    income: 150_000,
    expenses: 50_000,
  };
  transactions: Transaction[] = [
    {
      type: 'expense',
      amount: 45,
      category: 'food',
      date: new Date(2023, 6, 26),
    },
    {
      type: 'expense',
      amount: 280,
      category: 'shopping',
      date: new Date(2023, 6, 24),
    },
    {
      type: 'expense',
      amount: 60,
      category: 'entertainment',
      date: new Date(2023, 6, 22),
    },
    {
      type: 'income',
      amount: 500,
      category: 'payroll',
      date: new Date(2023, 6, 20),
    },
  ];
}
