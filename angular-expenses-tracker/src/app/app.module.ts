import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AboutComponent } from './components/about/about.component';
import { AddTransactionComponent } from './components/add-transaction/add-transaction.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BalanceComponent } from './components/balance/balance.component';
import { HomeComponent } from './components/home/home.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { TransactionComponent } from './components/transaction/transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    BalanceComponent,
    TransactionsComponent,
    TransactionComponent,
    HomeComponent,
    AddTransactionComponent,
    AboutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
