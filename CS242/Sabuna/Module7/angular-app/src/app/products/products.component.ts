import { Component, OnInit } from '@angular/core';

interface products {
      [index: number]:{
      id: string;
      name: string;
      qty: number;
      price: number;

    }
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: products =[
    {id: '1', name: 'Eloquent Javascript', qty: 10, price :0},
    {id: '2', name: 'Javascript: the good parts', qty: 30, price: 30},
    {id: '3', name: 'Javascript: the definitive guide', qty: 30, price: 30},
    {id: '4', name: 'Secrte of javascripot ninja', qty: 12, price: 46},
    {id: '5', name: 'The priniciple of object oriented javascript', qty: 12, price: 46},

  ]

  constructor() { }

  ngOnInit() {
  }

}
