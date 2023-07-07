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
    amount: 100_000,
    income: 150_000,
    expenses: 50_000,
  };
  transactions: Transaction[] = [];

  constructor(private transactionsService: TransactionsService) {}

  ngOnInit(): void {
    this.transactionsService.get().subscribe((response: Transaction[]) => {
      this.transactions = response;
    });
  }

  removeTransaction(transactionId: string) {
    // Revome a transaction given its id
    this.transactions = this.transactions.filter(
      (transaction) => transaction.id !== transactionId
    );
  }
}
