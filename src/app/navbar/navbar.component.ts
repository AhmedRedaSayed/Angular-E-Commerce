import { AfterViewInit, Component, OnChanges, SimpleChanges } from '@angular/core';
import { AuthService } from '../auth.service';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit {
  isLogin:boolean=false;
  cartNumber:number = 0;
  logOut(){
    this._AuthService.logOut();
  }
  constructor(private _AuthService:AuthService , private _CartService:CartService)
  {

    _AuthService.userData.subscribe({
      next:()=>
      {
        if(_AuthService.userData.getValue() !== null)
    {
      this.isLogin=true;

    }
    else
    {
      this.isLogin=false;
    }

      }
    })

  }

  ngAfterViewInit(): void {
    this._CartService.numberOfCartItems.subscribe({
      next:(value)=> this.cartNumber = value
    })
  }
}
