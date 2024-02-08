import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartDetails: any = [];
  headers: any = {
    token: localStorage.getItem('userToken'),
  };
  constructor(private _CartService: CartService) {}
  ngOnInit(): void {
    this.getUserCart();
  }

  getUserCart() {
    this._CartService.getLoggedUserCart().subscribe((data) => {
      this.cartDetails = data.data;
    });
  }
  removeItem(productId: string) {
    this._CartService.removeCartItem(productId).subscribe((data) => {
      this.cartDetails = data.data,
      this._CartService.numberOfCartItems.next(data.numOfCartItems)
    });
  }
  updateItemsCount(productId: string, count: number) {
    this._CartService.updateCount(productId, count).subscribe({
      next: (Response) => {
        console.log(Response);
        this.cartDetails = Response.data;
      },
      error: (err) => console.log(err),
    });
  }
}
