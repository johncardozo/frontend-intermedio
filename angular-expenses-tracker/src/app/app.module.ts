import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BalanceComponent } from './components/balance/balance.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { TransactionComponent } from './components/transaction/transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    BalanceComponent,
    TransactionsComponent,
    TransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
