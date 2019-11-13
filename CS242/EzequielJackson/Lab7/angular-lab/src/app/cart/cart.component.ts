import { Component, OnInit } from '@angular/core';

interface cart {
  [index: number]: {
    id: string;
    name: string;
    price: number;
    quantity: number
  }
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: cart = [
    { id: '1', name: 'Ski Strap', price: 35, quantity: 4},
    { id: '2', name: 'Ski Binding', price: 263, quantity: 2},
    { id: '3', name: 'Skis', price: 831, quantity: 1}, 
  ]
  constructor() { }

  ngOnInit() {
  }

}
