import { Component } from '@angular/core';

@Component({
  selector: 'app-country-list',
  template: `
    <h3 class='country-name'>
      Pakistan
    </h3>
  `,
  styles: [
    `
      .country-name {
        color: blue
      }
    `
  ]
})
export class CountryListComponent {

}
