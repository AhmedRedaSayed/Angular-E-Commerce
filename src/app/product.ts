export interface Product {
  title:string,
  description:string,
  quantity:number,
  price:number,
  imageCover:String,
  category:{name:string,image:string,_id:string},
  brand:object,
  ratingsAverage:number,
  sold:number,
  images:object
  subcategory:[],
  _id:string,



}
