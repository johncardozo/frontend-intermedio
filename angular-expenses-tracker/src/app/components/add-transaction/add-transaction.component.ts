import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Transaction } from 'src/app/models/transaction.model';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.scss'],
})
export class AddTransactionComponent implements OnInit {
  addTransactionForm!: FormGroup;

  constructor(
    private transactionsService: TransactionsService,
    private router: Router
  ) {}

  // Hook que se ejecuta al montar el componente en el DOM
  ngOnInit(): void {
    const date: string = formatDate(new Date(), 'yyyy-MM-dd', 'en');

    this.addTransactionForm = new FormGroup({
      amount: new FormControl(0, [
        Validators.required,
        Validators.pattern('^[0-9]+$'),
      ]),
      type: new FormControl('expense', Validators.required),
      category: new FormControl('food', Validators.required),
      date: new FormControl(date, Validators.required),
    });
  }

  onSubmit(): void {
    // Verifica si el formulario es válido
    if (this.addTransactionForm.valid) {
      // Obtiene el objeto Transaction del formulario
      const newTransaction: Transaction = this.addTransactionForm.value;
      // Usa el servicio para crear una transacción en el BE
      this.transactionsService
        .create(newTransaction)
        .subscribe((response: Transaction) => {
          // Redirecciona al Home
          this.router.navigate(['']);
        });
    } else {
      console.error('The form is not valid');
    }
  }
}
