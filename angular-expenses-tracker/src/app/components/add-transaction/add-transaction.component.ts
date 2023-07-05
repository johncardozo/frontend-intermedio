import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.scss'],
})
export class AddTransactionComponent implements OnInit {
  addTransactionForm!: FormGroup;

  // Hook que se ejecuta al montar el componente en el DOM
  ngOnInit(): void {
    const date: string = formatDate(new Date(2022, 7, 30), 'yyyy-MM-dd', 'en');

    this.addTransactionForm = new FormGroup({
      amount: new FormControl(0),
      type: new FormControl('expense'),
      category: new FormControl('food'),
      date: new FormControl(date),
    });
  }
}
