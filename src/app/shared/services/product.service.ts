import { Injectable } from '@angular/core';
import {Product} from '../model/Product';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {AuthenticationService} from './authentication.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  id = 1;
  products: Product[];
  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {
  }
  getProductById(id: number): Observable<any>
  {
    return this.http.get<Product>('https://localhost:44333/api/' + 'product/' + 'get/' + id);
  }
  getProducts(): Observable<Product[]>
  {
    return this.http.get<Product[]>('https://localhost:44333/api/' + 'product');
  }
  addProduct(product: Product): Observable<Product>
  {
    return this.http.post<Product>('https://localhost:44333/api/' + 'product/', product);
  }
  updateProduct(product: Product): Observable<Product>
  {
    return this.http.put<Product>('https://localhost:44333/api/' + 'product/' + product.id, product);
  }
  deleteProduct(id: number): Observable<any>
  {
    return this.http.delete('https://localhost:44333/api/' + 'product/' + id);
  }

  getItems(): Observable<Product[]> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.get<Product[]>('https://localhost:44333/api/' + 'product', httpOptions);

  }

}
