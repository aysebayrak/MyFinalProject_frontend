import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  
 products:Product[]=[];
 //productResponseModel:ProductResponseModel ={};


  constructor() { }

  ngOnInit(): void {
    console.log("init çalıştı");
  }
  getProducts(){

  }

}






