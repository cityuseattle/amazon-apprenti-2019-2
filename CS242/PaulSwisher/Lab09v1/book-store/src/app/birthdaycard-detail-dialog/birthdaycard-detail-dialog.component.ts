import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Birthdaycard } from '../birthdaycards/birthdaycards.component'; 

@Component({
  selector: 'app-birthdaycard-detail-dialog',
  templateUrl: './birthdaycard-detail-dialog.component.html',
  styleUrls: ['./birthdaycard-detail-dialog.component.css']
})
export class BirthdaycardDetailDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<BirthdaycardDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Birthdaycard) {}
  
  onNoClick(): void {
    this.dialogRef.close();
  }
  
  ngOnInit() {
  }
}
