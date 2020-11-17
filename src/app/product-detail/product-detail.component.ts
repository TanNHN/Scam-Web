import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../interfaces/product';
import { UserReview } from '../interfaces/user-review';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product = null;
  userReview = [];
  counter(i: number) {
    return new Array(i);
}
  constructor(private productService: ProductService, private route: ActivatedRoute,) {
    this.productService.getProductDetailFromID(this.route.snapshot.params.productId)
    .subscribe((resp: Product) => {
      console.log(resp);
      this.product = resp;
    });
    this.productService.getReviewFromProduct(this.route.snapshot.params.productId)
    .subscribe((resp: UserReview[]) => {
      console.log(resp);
      this.userReview = resp;
    });
  }

  ngOnInit(): void {
  }

}
