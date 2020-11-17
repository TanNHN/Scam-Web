import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../interfaces/category';
import { Product } from '../interfaces/product';
import { CategoryService } from '../services/category.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
  product = [];
  category;
  constructor(private productService: ProductService,private categoryService: CategoryService,private route: ActivatedRoute,) {
    this.productService.getProductFromcCategoryID(this.route.snapshot.params.cateID)
    .subscribe((resp: Product[]) => {
      console.log(resp);
      this.product = resp;
    });
    this.categoryService.getCategoryByID(this.route.snapshot.params.cateID)
    .subscribe((resp: Category) => {
      console.log(resp);
      this.category = resp;
    });
   }

  ngOnInit(): void {
  }

}
