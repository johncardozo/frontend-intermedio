import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceComponent } from './balance.component';

describe('BalanceComponent', () => {
  let component: BalanceComponent;
  let fixture: ComponentFixture<BalanceComponent>;
  let compiled: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BalanceComponent],
    });
    fixture = TestBed.createComponent(BalanceComponent);
    component = fixture.componentInstance;
    // Monta y recarga el componente
    fixture.detectChanges();
    // Obtener el template
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display amount, income and expenses', () => {
    // Establece el valor de una propiedad del componente
    component.balance = {
      amount: 100,
      income: 150,
      expenses: 50,
    };
    // Monta y recarga el componente
    fixture.detectChanges();

    // Ejecuta la prueba para verificar el valor de amount
    const amountElement = compiled.querySelector('h2');
    expect(amountElement?.textContent).toBe('$100.00');

    // Ejecuta la prueba para verificar el valor de income
    const incomeElement = compiled.querySelector(
      '.balance__info div:first-child h3'
    );
    expect(incomeElement?.textContent).toBe('$150.00');

    // Ejecuta la prueba para verificar el valor de expenses
    const expensesElement = compiled.querySelector(
      '.balance__info div:nth-child(2) h3'
    );
    expect(expensesElement?.textContent).toBe('$50.00');
  });

  it('should have the right amount, income and expenses', () => {
    component.balance = {
      amount: 200,
      income: 300,
      expenses: 100,
    };
    fixture.detectChanges();
    expect(component.balance.amount).toBe(
      component.balance.income - component.balance.expenses
    );
  });
});
