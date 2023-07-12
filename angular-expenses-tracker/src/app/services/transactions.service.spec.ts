import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { TransactionsService } from './transactions.service';
import { Transaction } from '../models/transaction.model';

describe('TransactionsService', () => {
  let service: TransactionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(TransactionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all transactions', (done) => {
    service.get().subscribe((transactions: Transaction[]) => {
      expect(transactions.length).toBe(6);
      done();
    });
  });
});
