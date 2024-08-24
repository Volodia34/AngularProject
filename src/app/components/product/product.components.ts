import {Component, Input} from '@angular/core';
import {IProudct} from "../../models/proudct";
import {CurrencyPipe, DecimalPipe, NgClass, NgIf, NgStyle} from "@angular/common";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  imports: [
    CurrencyPipe,
    NgIf,
    NgClass,
    NgStyle,
    DecimalPipe
  ],
  standalone: true
})

export class ProductComponents {
  @Input() product: IProudct

  details = false
}
