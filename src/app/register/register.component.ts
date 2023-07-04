import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  title: string = 'Register Component';
  // show: boolean = true;
  // userName: string = 'Nabeel'
  // color: string = 'blue' 

  userData:any = {}
  getData(data: NgForm) {
    console.log(data)
    this.userData = data
  }
}