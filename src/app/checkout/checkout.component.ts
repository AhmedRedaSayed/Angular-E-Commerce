import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  cartId: string = '';
  constructor(
    private _CartService: CartService,
    private _ActivatedRoute: ActivatedRoute
  ) {}
  shippingAddress: FormGroup = new FormGroup({
    details: new FormControl(null),
    phone: new FormControl(null),
    city: new FormControl(null),
  });

  navigateToPayment(url: string) {
    window.location.href = url;
  }

  handleSubmit(shippingAddress: FormGroup) {
    this._ActivatedRoute.paramMap.subscribe((data: any) => {
      this.cartId = data.params.id;
    });
    this._CartService
      .onlinePayment(shippingAddress.value, this.cartId)
      .subscribe({
        next: (Response: any) => {
          this.navigateToPayment(Response.session.url);
        },
        error: (err) => console.log(err),
      });
  }
}
