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
  {id: '1', cardNumber: 12345678910, type: 'credit card'},
  {id: '2', cardNumber: 10000000000, type: 'paypal'},
  {id: '3', cardNumber: 99999999999, type: 'debit card'},
]
  constructor() { }

  ngOnInit() {
  }

}
