import { Component, OnInit } from '@angular/core';

interface payment {
  [index: number]: {
    id: string;
    cardnumber: string;
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
    { id: '1', cardnumber: '1234 5678 1234 1234', type: 'Visa'},
    { id: '2', cardnumber: '1234 1234 1234 1234', type: 'MasterCard'},
    { id: '1', cardnumber: '1224 1243 1234 1423', type: 'American Express'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
