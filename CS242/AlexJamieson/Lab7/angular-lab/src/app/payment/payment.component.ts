import { Component, OnInit } from '@angular/core';

interface payment {
  [index: number]: {
    id: string;
    cardNumber: number;
    type: string;
  }
}

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  payment: payment = [
    { id: '1', cardNumber: 1234123412341234, type: 'Google Pay'},
    { id: '2', cardNumber: 1234123412341234, type: 'PayPal'},
    { id: '3', cardNumber: 1234123412341234, type: 'Credit Card'}, 
  ]
  constructor() { }

  ngOnInit() {
  }

}
