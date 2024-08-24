import { Component } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {ModalService} from "../../services/modal.service";
import {AsyncPipe, NgForOf, NgIf, TitleCasePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {FilterProductsPipe} from "../../pipes/filter-products.pipe";
import {ProductComponents} from "../../components/product/product.components";
import {ModalComponent} from "../../components/modal/modal.component";
import {CreateProductComponent} from "../../components/create-product/create-product.component";

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [
    TitleCasePipe,
    FormsModule,
    NgIf,
    NgForOf,
    FilterProductsPipe,
    ProductComponents,
    ModalComponent,
    CreateProductComponent,
    AsyncPipe
  ],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent {
  title = 'My First Angular Project';
  // products: IProudct[] = []
  loading = false
  // products$: Observable<IProudct[]>
  term = ''


  constructor(public productsService: ProductsService,public modalService:ModalService) {
  }

  ngOnInit(): void {
    this.loading = true
    // this.products$ = this.productsService.getAll().pipe(
    //   tap(() => this.loading =false)
    // )
    this.productsService.getAll().subscribe((products) => {
      this.loading = false
    })
  }
}
