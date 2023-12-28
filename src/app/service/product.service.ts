import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../model/Product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseURl ="http://localhost:3000/product"; 
  baseURlCart ="http://localhost:3000/cart"; 
  constructor(private http : HttpClient) { }

  addProduct(product:any):Observable<any>{
    return this.http.post<any>(this.baseURl, product)
  }

  productList():Observable<Product[]>{
    return this.http.get<Product[]>(this.baseURl)
  }

  productByID(id:any):Observable<Product>{
    return this.http.get<Product>(this.baseURl+"/"+id)
  }


  addCart(product:Product):Observable<Product>{
    return this.http.post<Product>(this.baseURlCart,product)
  }

  displayCart():Observable<Product[]>{
    return this.http.get<Product[]>(this.baseURlCart)
  }
}
