import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms' ;
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponentComponent } from './core/add-product-component/add-product-component.component';
import { HomeComponentComponent } from './core/home-component/home-component.component';
import { ShowShoppingComponentComponent } from './core/show-shopping-component/show-shopping-component.component';
import { FormsModule } from '@angular/forms';


import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './core/details/details.component';
@NgModule({
  declarations: [
    AppComponent,
    AddProductComponentComponent,
    HomeComponentComponent,
    ShowShoppingComponentComponent,
    DetailsComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
