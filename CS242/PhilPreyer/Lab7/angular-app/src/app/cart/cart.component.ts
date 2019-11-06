import { Component, OnInit } from '@angular/core';

interface cart {
  [index: number]:{
    id: string;
    name: string;
    qty:number;
    price:number;
  }
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  cart: cart = [
    {id: '1', name: 'Ninja Sword', qty: 10, price: 0 },
    {id: '2', name: 'Nunchucks', qty: 30, price: 30 },
    {id: '3', name: 'Cool Head Band', qty: 13, price: 20 },
    {id: '4', name: 'Cool Shades', qty: 12, price: 46 },
    {id: '5', name: 'Infinity Gauntlet', qty: 1, price: 0 },
  ];
  constructor() { }

  ngOnInit() {
  }

}
