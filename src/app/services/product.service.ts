import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';//apiye bağlammak iiçim
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ListResponseModel } from '../models/listResponseModel';
@Injectable({ 
  providedIn: 'root'
})
export class ProductService {
  apiUrl="https://localhost:44368/api/products/getall"//datayı aldım
  constructor(private httpClient : HttpClient) { }

  getProducts():Observable<ListResponseModel<Product>>{
      return this.httpClient
    .get<ListResponseModel<Product>>(this.apiUrl) //bu url te gett işlemi yap dönen sonucu (prM)le yolla
    

  }
 
}
