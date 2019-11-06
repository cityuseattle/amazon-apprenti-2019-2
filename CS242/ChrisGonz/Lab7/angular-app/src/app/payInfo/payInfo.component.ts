import { Component, OnInit } from '@angular/core';

interface payInfo {
  [index: number]: {
    id: string;
    cardNumber: string;
    type: string;
  }
}

@Component({
  selector: 'app-products',
  templateUrl: './payInfo.component.html',
  styleUrls: ['./payInfo.component.css']
})



export class payInfoComponent implements OnInit {
  payment : payInfo = [
    { id: '1', cardNumber: '12345678', type: "Visa" },
    { id: '2', cardNumber: '98765431', type: "American Express" },
    { id: '3', cardNumber: '564738281', type: "Mastercard" },
  ];

  constructor() { }

  ngOnInit() {
  }

}
