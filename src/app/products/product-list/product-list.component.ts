import { Component, OnInit } from '@angular/core';
import {Product} from '../../shared/model/Product';
import {ProductService} from '../../shared/services/product.service';
import {AuthGuard} from '../../guards/auth.guard';

@Component({
  selector: 'app-products-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  constructor(private productService: ProductService, private authGuard: AuthGuard) {
  }

  ngOnInit() {
    this.refresh();
  }

  addProduct() {
    //data static for now
  }

  refresh() {
    this.authGuard.canActivate();
    this.productService.getProducts().subscribe(listOfProducts => {
      this.products = listOfProducts;
    });
  }
  delete (id: number) {
    this.productService.deleteProduct(id)
      .subscribe(message => {
        console.log('Deleted Product: ' + message);
        this.refresh();
      });
  }
}
