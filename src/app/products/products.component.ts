import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:Product[]=[]
  constructor (private _ProductsService:ProductsService , private _CartService:CartService){}
  ngOnInit(): void {
    this.getProducts();

  }

  getProducts()
  {
    this._ProductsService.getProducts().subscribe({
      next: (response) => (this.products = response.data),
    });
  }
  addToCart(productId: string) {
    this._CartService.addToCart(productId).subscribe({
      next: (data) =>this._CartService.numberOfCartItems.next(data.numOfCartItems),
    });
  }

}
