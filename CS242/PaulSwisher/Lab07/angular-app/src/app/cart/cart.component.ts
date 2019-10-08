import { Component, OnInit } from '@angular/core';

interface cart {
  [index: number]: {
    id: string;
    name: string;
    price: number;
    qty: number;
    
  }
}
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
cart: cart = [
  { id: '1', name: 'Dining Table', qty: 1, price: 900 },
  { id: '2', name: 'Kitchen chairs', qty: 6, price: 250 },
  { id: '3', name: 'Couch', qty: 2, price: 800 },
  { id: '4', name: 'Love Seat', qty: 1, price: 250 },
  { id: '5', name: 'Rug', qty: 2, price: 150 },
];
  constructor() { }

  ngOnInit() {
  }

}
