import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  product !: Product; 
  constructor(private router : Router ,
    private service : ProductService , 
     private activatedRoute : ActivatedRoute){}
  ngOnInit(): void {
   this.getProductById()
  }


  getProductById(){
    this.service.productByID(this.activatedRoute.snapshot.params["id"]).subscribe((data)=>{
      console.log(data) ;

      this.product = data ; 
    })

  }
}
