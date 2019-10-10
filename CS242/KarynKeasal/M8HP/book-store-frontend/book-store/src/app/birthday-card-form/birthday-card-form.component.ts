import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../api.service';

/*export interface Material {
  value: string;
  viewValue: string;
}*/

@Component({
  selector: 'app-birthday-card-form',
  templateUrl: './birthday-card-form.component.html',
  styleUrls: ['./birthday-card-form.component.css']
})
export class BirthdayCardFormComponent implements OnInit {
  private birthdayId: string;
  private productTitle: string = '';
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
    this.birthdayId = this.route.snapshot.paramMap.get('id');
  }

  handleSave() {
    let message: string;
    if (this.productTitle === '' || this.material === '' || this.price < 0)
      message = 'Please finish the form with a price equal or greater than 0';
    else {
      message = 'Card is added.';
      this.apiService.addNewBirthday({
        productTitle: this.productTitle, material: this.material, picture: this.picture, price: this.price,
      }).subscribe();
      this.productTitle = '';
      this.material = '';
      this.picture = '';
      this.price = 0;
    }
    this._snackBar.open(message, 'Close', {duration: 2000 });
  }
}
