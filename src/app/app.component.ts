import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '';
  firstName = '';
  lastName = '';
  addressLine1 = '';
  addressLine2 = '';
  divDisplay = false;

  myFunction() {
    this.divDisplay = true;
  }

}
