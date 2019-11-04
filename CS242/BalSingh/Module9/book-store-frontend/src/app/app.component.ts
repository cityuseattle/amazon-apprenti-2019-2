import { Component } from '@angular/core';

@Component({
  /*
    If you use this selector as a tag inside another component 
    like <app-root> in main.ts, 
    it will render our component inside.
  */
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'book-store-frontend';
}
