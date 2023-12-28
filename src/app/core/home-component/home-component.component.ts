import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit{
  products !: Product[]; 
  cards !: Product[];
  existe : boolean = false ; 
  constructor(private service : ProductService , 
    private router : Router){}
  ngOnInit(): void {
    this.getProductList();
    this.getListeCard();
  }

addCart(product:Product){
  this.cards.forEach((element)=>{
    if(element.id==product.id){
      this.existe = true 
      alert("Product aredy existe ")
      
    }
  })


  if(this.existe == false ){
    this.service.addCart(product).subscribe((data)=>{
      console.log("product added successfullyyy to cart s");
      
    })
  }

}
GoToProductDetails(id:any){
  this.router.navigate(["product/"+id])
}

getListeCard(){
  this.service.displayCart().subscribe((data)=>{
    console.log(data );
    this.cards = data 
  })
}
  getProductList(){
    this.service.productList().subscribe((data) =>{
      console.log(data);
      this.products = data ; 
    })
  }
}
