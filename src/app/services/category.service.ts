import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAllCategory(){
    return this.http.get<Category[]>('https://scam2020.azurewebsites.net/api/Categories');
  }

  getCategoryByID(cateID){
    return this.http.get<Category>('https://scam2020.azurewebsites.net/api/Categories/'+ cateID);
  }
}
