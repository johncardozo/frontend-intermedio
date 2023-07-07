import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  // Servicio agregado con Dependency Injection
  constructor(private httpClient: HttpClient) {}

  public get(): Observable<Transaction[]> {
    return this.httpClient.get<Transaction[]>(
      'http://localhost:3000/transactions'
    );
  }
}
