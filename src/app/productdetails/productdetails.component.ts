import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';



@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit  {


  constructor(private _ActivatedRoute:ActivatedRoute
    , private _ProductsService:ProductsService)
  {

  }

prodictid:any;
productDetails:any;
  ngOnInit(): void
  {

    this._ActivatedRoute.paramMap.subscribe((params)=>
    {
      this.prodictid = params.get('id')

    });

    this._ProductsService.getProductDetails(this.prodictid).subscribe({
      next:(respone)=>{
        this.productDetails = respone.data;

      }
    })



  }


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }

}
