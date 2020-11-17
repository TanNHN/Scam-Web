import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import {RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { RatingModule } from 'ng-starrating';
import { StarRatingModule } from './angular-star-rating';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LoginComponent } from './login/login.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { InsertProductFormComponent } from './insert-product-form/insert-product-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductDetailComponent,
    LoginComponent,
    CategoryPageComponent,
    CategoryDetailComponent,
    InsertProductFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RatingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
