import { Component, Input } from '@angular/core';
import { Transaction } from '../../models/transaction.model';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
})
export class TransactionComponent {
  @Input() transaction!: Transaction;
}
