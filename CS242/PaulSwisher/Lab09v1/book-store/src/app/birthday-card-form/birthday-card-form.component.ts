import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-birthday-card-form',
  templateUrl: './birthday-card-form.component.html',
  styleUrls: ['./birthday-card-form.component.css']
})
export class BirthdayCardFormComponent implements OnInit {
  private cardId: string;
  private title: string = '';
  private material: string = '';
  private picture: string = '';
  private price: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar,
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    // Get the url pramater
    this.cardId = this.route.snapshot.paramMap.get('id');
  }

  handleSave() {
    let message: string;
    // If the the form input values are invalid, show a snackbar
    if (this.title === '')
      message = 'Please finish the form and offer a price equal or greater than 0.';
    else {
      // Call the add book API and reset all form input vaules
      message = 'Card is added.';
      this.apiService.addNewBirthCard({
        title: this.title, material: this.material, picture: this.picture, price: this.price,
      }).subscribe();
      this.title = '';
      this.material = '';
      this.picture = '';
      this.price = 0;
    }
    this._snackBar.open(message, 'Close', { duration: 2000 });
  }
}