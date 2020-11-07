import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/category';
import { Product } from '../interfaces/product';
import { ProductCategory } from '../interfaces/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getTopProductFromCategory(): Observable<Category[]> {
    return this.http.get<Category[]>('https://scam2020.azurewebsites.net/api/Categories/top/5/products');
  }

  getProductFromcCategoryID(cateId){
    return this.http.get<Product[]>('https://scam2020.azurewebsites.net/api/Categories/'+cateId+'/products?pageIndex=1&pageSize=10');
  }
}
