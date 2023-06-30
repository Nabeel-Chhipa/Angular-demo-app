import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  message = 'Message from Login component .ts file';
  userName: string = '';
  getUserData(name: string) {
    this.userName = name
  }
}
