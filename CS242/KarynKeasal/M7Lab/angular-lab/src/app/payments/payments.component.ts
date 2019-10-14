import { Component, OnInit } from '@angular/core';

interface payments {
  [index: number]: {
    id: string;
    cardNumber: string;
    type: string;
  }
}

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  payments: payments = [
    { id: '1', cardNumber: '1234-1234-1234-1234', type: 'Visa' },
    { id: '2', cardNumber: '5678-5678-5678-5678', type: 'Mastercard'},
    { id: '3', cardNumber: '1357-1357-1357-1357', type: 'PayPal'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
