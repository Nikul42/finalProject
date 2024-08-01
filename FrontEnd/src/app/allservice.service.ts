import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const url = "http://localhost:4000/product";

@Injectable({
  providedIn: 'root'
})
export class AllserviceService {

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get(url);
  }


  items:any = [];

  addToCart(product:any){
    this.items.push(product);
    localStorage.setItem('cart',JSON.stringify(this.items));
  }



}

