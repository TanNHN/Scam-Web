import { Component, OnInit } from '@angular/core';
import { Category } from '../interfaces/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {
category = [];
  constructor(private categoryService: CategoryService) {
    this.categoryService.getAllCategory()
    .subscribe((resp: Category[]) => {
      console.log(resp);
      this.category = resp;
    });
   }

  ngOnInit(): void {
  }

}
