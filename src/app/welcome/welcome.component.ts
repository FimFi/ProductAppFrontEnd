import { Component, OnInit } from '@angular/core';
import {Product} from '../shared/model/Product';
import {ProductService} from '../shared/services/product.service';
import {AuthenticationService} from '../shared/services/authentication.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  productItems: Product[] = [];
  username: string;
  errormessage: string = '';
  title = 'the product application!';

  constructor(private productService: ProductService, private authService: AuthenticationService) {
    this.username = authService.getUsername();
  }

  ngOnInit(): void {
    this.productService.getItems()
      .subscribe(
        items => {
          this.productItems = items;
        },
        error => {
          this.errormessage = error.message;
        });
  }
}
