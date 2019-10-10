import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-birthday-form',
  templateUrl: './birthday-form.component.html',
  styleUrls: ['./birthday-form.component.css']
})
export class BirthdayFormComponent implements OnInit {

    public birthdayId: string;
    public title = '';
    public material = '';
    public picture = '';
    public price = 0;

    constructor(
    private route: ActivatedRoute,
    private router: Router,
    // tslint:disable-next-line: variable-name
    private _snackBar: MatSnackBar,
    private apiService: ApiService,
      ) { }
      ngOnInit() {
    // Get the url pramater
    this.birthdayId = this.route.snapshot.paramMap.get('id');
      }
      handleSave() {
    let message: string;
    // If the the form input values are invalid, show a snackbar
    if (this.title === '' || this.price < 0) {
    message = 'Please finish the form and offer a price equal or greater than 0.';
    } else {
    // Call the add book API and reset all form input vaules
    message = 'Card is added.';
    this.apiService.addNewCard({
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
