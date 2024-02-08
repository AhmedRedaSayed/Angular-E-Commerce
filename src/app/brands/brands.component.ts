import { Component, OnInit } from '@angular/core';
import { BrandService } from '../brand.service';


@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  allBrands: any []=[]
constructor(private _BrandService:BrandService){}

ngOnInit(): void {
  this.getAllBrands()
}

getAllBrands(){
this._BrandService.getBrands().subscribe((data)=>{

 this.allBrands = data.data;

  


})
}
}
