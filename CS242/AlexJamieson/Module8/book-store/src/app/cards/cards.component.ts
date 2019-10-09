import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { CardDetailDialogComponent } from '../card-detail-dialog/card-detail-dialog.component';
import { ApiService } from '../api.service';

export interface Card {
  _id: string; title: string; material: string; price: number; picture: string;
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  private cards: Array<Card>;
  private cardsObject: {
    [id: string]: Card;
  };

  constructor(private dialog: MatDialog, private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.fetchCards().subscribe((data: Array<Card>) => {
      this.cards = data;
      // Transfer the book array to an object to speed up the look up
      this.cardsObject = this.cards.reduce((obj, card) => {
        obj[card._id] = card;
        return obj;
      }, {});
    });
  }

  openDialog(id: string): void {
    this.dialog.open(CardDetailDialogComponent, {
      width: '350px',
      data: this.cardsObject[id],
    });
  }
}