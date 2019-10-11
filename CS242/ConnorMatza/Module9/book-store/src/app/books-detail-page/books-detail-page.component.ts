import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Book } from '../books/books.component';
@Component({
  selector: 'app-books-detail-page',
  templateUrl: './books-detail-page.component.html',
  styleUrls: ['./books-detail-page.component.css']
})
export class BooksDetailPageComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<BooksDetailPageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Book) {}
  

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
