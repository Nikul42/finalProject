import { Component, OnInit } from '@angular/core';
import { AllserviceService } from '../allservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cart:AllserviceService) { }
cartItem:any
  ngOnInit(): void {
    this.loadCart();

  }


  loadCart(){
    this.cartItem = JSON.parse(localStorage.getItem('cart') as string) ?? [];

  }
  
  removeItem(product:any){
    let index = this.cartItem.indexOf(product);
    this.cartItem.splice(index,1);
    localStorage.setItem('cart',JSON.stringify(this.cartItem));
    this.loadCart();
  }

}
