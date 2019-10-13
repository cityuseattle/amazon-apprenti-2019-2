import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BirthdayCardsDialogComponent } from '../birthday-cards-dialog/birthday-cards-dialog.component';
import { ApiService } from '../api.service';

export interface BirthdayCards {
  _id: string; title: string; material: string; price: number; picture: string;
}

@Component({
  selector: 'app-birthday-cards',
  templateUrl: './birthday-cards.component.html',
  styleUrls: ['./birthday-cards.component.css']
})
export class BirthdayCardsComponent implements OnInit {
  private birthdaycards: Array<BirthdayCards>;
  private birthdaycardsObject: {
    [id: string]: BirthdayCards;
  };

  constructor(private dialog: MatDialog, private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.fetchBirthdayCards().subscribe((data: Array<BirthdayCards>) => {
      this.birthdaycards = data;
      // Transfer the birthdaycards array to an object to speed up the look up
      this.birthdaycardsObject = this.birthdaycards.reduce((obj, birthdaycard) => {
        obj[birthdaycard._id] = birthdaycard;
        return obj;
      }, {});
    });
  }

  openDialog(id: string): void {
    this.dialog.open(BirthdayCardsDialogComponent, {
      width: '350px',
      data: this.birthdaycardsObject[id]
    });
  }
  
  delete(id: string): void {
  // Remove the card data from two internal data sources
  delete this.birthdaycardsObject[id];
  this.birthdaycards = this.birthdaycards.filter((birthdaycard) => birthdaycard._id != id);
  this.apiService.deleteBirthdayCard(id).subscribe(); 
  }
}