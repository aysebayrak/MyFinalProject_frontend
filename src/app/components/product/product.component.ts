import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

import { ProductReponseModel } from 'src/app/models/productResponseModel';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  
 products:Product[]=[];
 dataLoaded=false;


  constructor(private productService :ProductService) { }  //ben apiden httpclient türünde birşey istiyorum 


  ngOnInit(): void {
   this.getProducts();
  }

  getProducts(){
   

   this.productService.getProducts().subscribe(response=>{
     this.products=response.data
     this.dataLoaded=true;

   })
   
   
  }
 

}






