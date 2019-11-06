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
    { id: '1', name: 'Akai MPC', price: 249, quantity: 2},
    { id: '2', name: 'Ableton push2', price: 799, quantity: 1},
    { id: '3', name: 'Drums', price: 999, quantity: 3}, 
  ]
  constructor() { }

  ngOnInit() {
  }

}
