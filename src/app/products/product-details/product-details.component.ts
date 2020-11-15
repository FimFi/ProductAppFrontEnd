import { Component, OnInit } from '@angular/core';
import {Product} from '../../shared/model/Product';
import {ProductService} from '../../shared/services/product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;
  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(id)
      .subscribe(productFromRest => {
        this.product = productFromRest;
      });
  }

}
