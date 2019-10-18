import { Component, OnInit } from '@angular/core';

interface Cart {
  [index: number]: {
    id: string;
    name: string;
    price: number;
    qty: number;
  }
}

@Component({
  selector: 'app-products',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})



export class cartComponent implements OnInit {
  carts : Cart = [
    { id: '1', name: '', price: 10, qty:  2},
    { id: '2', name: '', price: 18, qty:  1},
    { id: '3', name: '', price: 19, qty: 1},
  ];

  constructor() { }

  ngOnInit() {
  }

}
