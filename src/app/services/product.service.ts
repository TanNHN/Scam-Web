import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/category';
import { Product } from '../interfaces/product';
import { ProductCategory } from '../interfaces/product-category';
import { UserReview } from '../interfaces/user-review';

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

  getProductDetailFromID(proId){
    return this.http.get<Product>('https://scam2020.azurewebsites.net/api/Products/'+proId+'/details');
  }

  getReviewFromProduct(proId){
    return this.http.get<UserReview[]>('https://scam2020.azurewebsites.net/api/Products/'+proId+'/reviews?pageNum=1&pageSize=30');
  }
}
