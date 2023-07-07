import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blog';
  // name = 'Muhammad Nabeel';
  data = 10
  updateData() {
    this.data = Math.floor(Math.random()*10)
  }
  userDetails = [
    {
      name: 'Nabeel',
      email: 'nabeel@gmail.com'
    },
    {
      name: 'Usama',
      email: 'usama@gmail.com'
    },
    {
      name: 'Saad',
      email: 'saad@gmail.com'
    },
  ]
}
