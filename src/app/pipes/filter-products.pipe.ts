import { Pipe, PipeTransform } from '@angular/core';
import {IProudct} from "../models/proudct";

@Pipe({
  name: 'filterProducts',
  standalone: true
})
export class FilterProductsPipe implements PipeTransform {

  transform(products: IProudct[], search: string): IProudct[] {
    if(search.length === 0) return products
    return products.filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
  }

}
