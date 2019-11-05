import { Component } from '@angular/core';

// directs where to find initial homepage .css and .html, also defines name of selector for use in index.html
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// imported by app.module.ts file
export class AppComponent {
  // in this code title = 'book-store' is only used for test code spec.ts
  title = 'book-store';
}
