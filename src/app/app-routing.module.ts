import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CategoriesComponent } from './categories/categories.component';
import { CartComponent } from './cart/cart.component';
import { BrandsComponent } from './brands/brands.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGaurd } from './auth.guard';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductsComponent } from './products/products.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', canActivate: [AuthGaurd], component: HomeComponent },
  { path: 'about', canActivate: [AuthGaurd], component: AboutComponent },
  {
    path: 'categories',
    canActivate: [AuthGaurd],
    component: CategoriesComponent,
  },
  { path: 'products', canActivate: [AuthGaurd], component: ProductsComponent },
  {
    path: 'productdetails/:id',
    canActivate: [AuthGaurd],
    component: ProductdetailsComponent,
  },
  { path: 'carts', canActivate: [AuthGaurd], component: CartComponent },
  { path: 'brands', canActivate: [AuthGaurd], component: BrandsComponent },
  {
    path: 'checkout/:id',
    canActivate: [AuthGaurd],
    component: CheckoutComponent,
  },
  {
    path: 'allorders',
    canActivate: [AuthGaurd],
    component: OrdersComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
