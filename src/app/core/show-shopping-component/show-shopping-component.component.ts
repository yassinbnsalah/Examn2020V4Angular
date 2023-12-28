import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-show-shopping-component',
  templateUrl: './show-shopping-component.component.html',
  styleUrls: ['./show-shopping-component.component.css']
})
export class ShowShoppingComponentComponent implements OnInit {
  cards !: Product[] ; 

  constructor(private service : ProductService){}
  ngOnInit(): void {
   
    this.getListeCard(); 
  }


  getListeCard(){
    this.service.displayCart().subscribe((data)=>{
      console.log(data );
      this.cards = data 
    })
  }
}
