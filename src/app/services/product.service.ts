import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';//apiye bağlammak iiçim
import { ProductReponseModel } from '../models/productResponseModel';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
@Injectable({ 
  providedIn: 'root'
})
export class ProductService {
  apiUrl="https://localhost:44368/api/products/getall"//datayı aldım
  constructor(private httpClient : HttpClient) { }

  getProducts():Observable<ProductReponseModel>{
      return this.httpClient
    .get<ProductReponseModel>(this.apiUrl) //bu url te gett işlemi yap dönen sonucu (prM)le yolla
    

  }
 
}
