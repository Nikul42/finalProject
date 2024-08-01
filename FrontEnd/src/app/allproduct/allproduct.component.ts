import { Component, OnInit } from '@angular/core';
import { AllserviceService } from '../allservice.service';

@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.css']
})
export class AllproductComponent implements OnInit {

  Products:any = [];
  cart:any;
  constructor(private product:AllserviceService) { }

  ngOnInit(): void {
    this.product.getProducts().subscribe((data)=>{
      this.Products = data;
      console.log(data);
    })

  }


  addToCart(product:any){

    this.cart = localStorage.getItem('cart');
    
    for(let i in this.cart){
      if(this.cart[i].id === product.id){
        alert("Product is already in the cart");
        return;
      }
    }
    this.product.addToCart(product);
  }

}
