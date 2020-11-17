import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  { path: 'home-page', component: HomePageComponent },
  { path: 'product-detail/:productId', component: ProductDetailComponent },
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'category', component:  CategoryPageComponent},
  { path: 'category-detail/:cateID', component:  CategoryDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
