import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class CartService  {

  numberOfCartItems= new BehaviorSubject(0);


  constructor(private _HttpClient: HttpClient) {
    this.updateUserCart()
  }
  updateUserCart(){
    this.getLoggedUserCart().subscribe({
      next:(Response)=>{
        this.numberOfCartItems.next(Response.numOfCartItems)
        console.log(Response)},
      error:(err)=> console.log(err)

    })

  }

  addToCart(productId: string): Observable<any> {
    return this._HttpClient.post(
      `https://route-ecommerce.onrender.com/api/v1/cart`,
      { productId: productId }
    );
  }
  getLoggedUserCart(): Observable<any> {
    return this._HttpClient.get(
      `https://route-ecommerce.onrender.com/api/v1/cart`
    );
  }
  removeCartItem(productId: string): Observable<any> {
    return this._HttpClient.delete(
      `https://route-ecommerce.onrender.com/api/v1/cart/${productId}`
    );
  }
  updateCount(productId: string, count: number): Observable<any> {
    return this._HttpClient.put(
      `https://route-ecommerce.onrender.com/api/v1/cart/${productId}`,
      {
        count: count,
      }
    );
  }
  onlinePayment(shippingAdress: any, cartId: string): Observable<any> {
    return this._HttpClient.post(
      `https://route-ecommerce.onrender.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,
      {
        shippingAdress: shippingAdress,
      }

    );
  }
}
