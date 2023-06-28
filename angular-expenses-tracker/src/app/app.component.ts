import { Component } from '@angular/core';
import { Balance } from '../app/models/balance.model';

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
}
