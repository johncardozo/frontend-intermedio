import { Component, OnInit } from '@angular/core';
import { Balance } from '../../models/balance.model';
import { Transaction } from '../../models/transaction.model';
import { TransactionsService } from '../../services/transactions.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  balance: Balance = {
    amount: 0,
    income: 0,
    expenses: 0,
  };
  transactions: Transaction[] = [];

  constructor(private transactionsService: TransactionsService) {}

  ngOnInit(): void {
    this.transactionsService.get().subscribe((response: Transaction[]) => {
      this.transactions = response;
      this.calculateBalance();
    });
  }

  removeTransaction(transactionId: string) {
    this.transactionsService
      .remove(transactionId)
      .subscribe((response: Transaction) => {
        console.log(response);
        // Elimina la transacción del FE
        this.transactions = this.transactions.filter(
          (transaction) => transaction.id !== transactionId
        );
        // Actualiza el balance
        this.calculateBalance();
      });
  }

  /**
   * Función que recalcula las cantidades del componente Balance
   */
  calculateBalance() {
    let income: number = 0;
    let expenses: number = 0;
    this.transactions.forEach((transaction) => {
      if (transaction.type === 'expense') expenses += transaction.amount;
      if (transaction.type === 'income') income += transaction.amount;
    });
    const amount: number = income - expenses;
    this.balance = { amount, income, expenses };
  }
}
