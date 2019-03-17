import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  products: any = [];

  constructor(private _http: HttpClient) { }

  getProducts() {
   return this._http.get('http://localhost:3000/get-products');
  }
}
