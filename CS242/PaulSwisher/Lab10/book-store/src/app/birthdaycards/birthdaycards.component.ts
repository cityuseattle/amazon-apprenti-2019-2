import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { BirthdaycardDetailDialogComponent } from '../birthdaycard-detail-dialog/birthdaycard-detail-dialog.component';
import { ApiService } from '../api.service';

export interface Birthdaycard {
  _id: string; title: string; material: string; price: number; picture: string;
}

@Component({
  selector: 'app-birthdaycards',
  templateUrl: './birthdaycards.component.html',
  styleUrls: ['./birthdaycards.component.css']
})
export class BirthdaycardsComponent implements OnInit {
  private birthdaycards: Array<Birthdaycard>;
  private birthdaycardsObject: {
    [id: string]: Birthdaycard;
  };

  constructor(private dialog: MatDialog, private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.fetchBirthdaycards().subscribe((data: Array<Birthdaycard>) => {
      this.birthdaycards = data;
      // Transfer the birthdaycard array to an object to speed up the lirthdaycard up
      this.birthdaycardsObject = this.birthdaycards.reduce((obj, birthdaycard) => {
        obj[birthdaycard._id] = birthdaycard;
        return obj;
      }, {});
    });
  }

  openDialog(id: string): void {
    this.dialog.open(BirthdaycardDetailDialogComponent, {
      width: '350px',
      data: this.birthdaycardsObject[id],
    });
  }


delete(id: string): void {
  delete this.birthdaycardsObject[id];
  this.birthdaycards = this.birthdaycards.filter((birthdaycard) => birthdaycard._id !== id );
  this.apiService.deleteBirthdaycard(id).subscribe();
}}