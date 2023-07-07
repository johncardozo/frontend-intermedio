import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  url: string = 'http://localhost:3000/transactions';
  // Servicio agregado con Dependency Injection
  constructor(private httpClient: HttpClient) {}

  public get(): Observable<Transaction[]> {
    return this.httpClient.get<Transaction[]>(this.url);
  }

  public create(transaction: Transaction): Observable<Transaction> {
    return this.httpClient.post<Transaction>(this.url, transaction);
  }
}
