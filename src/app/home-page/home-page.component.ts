import { Component, OnInit } from '@angular/core';
import { Category } from '../interfaces/category';
import { Product } from '../interfaces/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  category = [];
  product = [];
  constructor(private productService: ProductService) {
    this.productService.getTopProductFromCategory()
    .subscribe((resp: Category[]) => {
      console.log(resp);
      this.category = resp;
    });
   }
  ngOnInit(): void {

  }

  onSelectCate(cateID : number){
    this.productService.getProductFromcCategoryID(cateID).subscribe((resp: Product[]) => {
      console.log(resp);
      this.product = resp;
    });;
  }

}
