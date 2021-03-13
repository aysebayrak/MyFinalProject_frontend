import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';//apiye bağlammak iiçim

import { Observable } from 'rxjs';

import { ListResponseModel } from '../models/listResponseModel';
import { Category } from '../models/category';
@Injectable({ 
  providedIn: 'root'
})
export class CategoryService {
  apiUrl="https://localhost:44368/api/categories/getall"//datayı aldım
  constructor(private httpClient : HttpClient) { }

  getCategories():Observable<ListResponseModel<Category>>{
      return this.httpClient
    .get<ListResponseModel<Category>>(this.apiUrl) //bu url te gett işlemi yap dönen sonucu (prM)le yolla
    

  }
 
}