import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { BirthdayCardDetailDialogComponent } from '../birthday-card-detail-dialog/birthday-card-detail-dialog.component';
import { ApiService } from '../api.service';

export interface BirthdayCard {
  _id: string; title: string; material: string; picture: string; price: number; 
}

@Component({
  selector: 'app-birthday-cards',
  templateUrl: './birthday-cards.component.html',
  styleUrls: ['./birthday-cards.component.css']
})
export class BirthdayCardsComponent implements OnInit {
  private birthdaycards: Array<BirthdayCard>;
  private birthdaycardsObject: {
    [id: string]: BirthdayCard;
  };

  constructor(private dialog: MatDialog, private apiService: ApiService) { }

  ngOnInit() {
      this.apiService.fetchBirthdayCards().subscribe((data: Array<BirthdayCard>) => {
      this.birthdaycards = data;
      // Transfer the book array to an object to speed up the look up
      this.birthdaycardsObject = this.birthdaycards.reduce((obj, birthdaycard) => {
        obj[birthdaycard._id] = birthdaycard;
        return obj;
      }, {});
    });
  }

  openDialog(id: string): void {
    this.dialog.open(BirthdayCardDetailDialogComponent, {
      width: '350px',
      data: this.birthdaycardsObject[id],
    });
  }
}
