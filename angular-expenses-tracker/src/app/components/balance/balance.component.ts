import { Component, Input } from '@angular/core';
import { Balance } from '../../models/balance.model';
@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss'],
})
export class BalanceComponent {
  @Input() balance!: Balance;
}
