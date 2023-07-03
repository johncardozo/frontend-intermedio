import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Transaction } from '../../models/transaction.model';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent {
  @Input() transactions!: Transaction[];
  @Output() removeTransactionEvent = new EventEmitter<string>();

  removeTransaction(transactionId: string) {
    this.removeTransactionEvent.emit(transactionId);
  }
}
