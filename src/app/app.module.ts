import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'  //module için 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';

@NgModule({
  declarations: [//kendi componentlerin 
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent
  ],
  imports: [//dışardan biizim yazmadığımız moduller
    BrowserModule,
    AppRoutingModule,
    HttpClientModule//HTTP İSTEKLER İÇİN
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
