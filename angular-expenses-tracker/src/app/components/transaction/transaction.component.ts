import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Transaction } from '../../models/transaction.model';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
})
export class TransactionComponent {
  // Parámetro de entrada
  @Input() transaction!: Transaction;
  // Evento de salida
  @Output() removeTransactionEvent = new EventEmitter<string>();

  dateStyles: Record<string, string> = {
    'margin-top': '3px',
  };

  // Función ejecutada al montar el componente
  ngOnInit() {
    this.dateStyles['border-bottom'] =
      this.transaction?.type === 'expense'
        ? '1px dashed red'
        : '1px dashed green';
  }

  removeTransaction() {
    // Emite el evento removeTransacionEvent al componente padre
    // enviando el id de la transacción
    this.removeTransactionEvent.emit(this.transaction.id);
  }
}
