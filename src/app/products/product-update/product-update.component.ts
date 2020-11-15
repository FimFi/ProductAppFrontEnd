import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../shared/services/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  id: number;
  productForm = new FormGroup({
    name: new FormControl(''),
    color: new FormControl(''),
    type: new FormControl(''),
    price: new FormControl(''),
  });

  constructor(private productService: ProductService, private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.id  = +this.route.snapshot.paramMap.get('id');

    this.productService.getProductById(this.id)
      .subscribe(productFromRest => {
        this.productForm.patchValue({
          name: productFromRest.name,
          color: productFromRest.color,
          type: productFromRest.type,
          price: productFromRest.price,
        });
      });
  }

  save() {
    const product = this.productForm.value;
    product.id = this.id;
    this.productService.updateProduct(product)
      .subscribe(productUpdated => {
        this.router.navigateByUrl('/products');
      });
  }
}
