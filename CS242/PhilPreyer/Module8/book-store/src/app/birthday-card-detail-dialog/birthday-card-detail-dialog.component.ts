import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { BirthdayCard } from '../birthday-cards/birthday-cards.component';

@Component({
  selector: 'app-birthday-card-detail-dialog',
  templateUrl: './birthday-card-detail-dialog.component.html',
  styleUrls: ['./birthday-card-detail-dialog.component.css']
})
export class BirthdayCardDetailDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<BirthdayCardDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BirthdayCard) { }

onNoClick(): void {
  this.dialogRef.close();
}

  ngOnInit() {
  }

}
