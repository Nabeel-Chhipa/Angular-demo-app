import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: [
    `
      .para_color {
        color: red 
      }
    `
  ]
})
export class UserListComponent {
  // users = [
  //   'Nabeel',
  //   'Usama',
  //   'Saad',
  //   'Zain',
  //   'Zariyab'
  // ];
  // userDetails = [
  //   {name: 'Nabeel', email: 'nabeel@gmail.com', country: 'Pakistan', city: 'Karachi'},
  //   {name: 'Usama', email: 'usama@gmail.com', country: 'Pakistan', city: 'Lahore'},
  //   {name: 'Saad', email: 'saad@gmail.com', country: 'Pakistan', city: 'Islamabad'},
  //   {name: 'Zain', email: 'zain@gmail.com', country: 'Pakistan', city: 'Multan'},
  //   {name: 'Zariyab', email: 'zariyab@gmail.com', country: 'Pakistan', city: 'Faisalabad'},
  // ]

  // userDetail = [
  //   {
  //     name: 'Nabeel',
  //     email: 'nabeel@gmail.com',
  //     socialAccounts: [
  //       {name: 'LinkedIn'},
  //       {name: 'Facebook'},
  //       {name: 'Instagram'},
  //       {name: 'Youtube'},
  //     ]
  //   },
  //   {
  //     name: 'Usama',
  //     email: 'usama@gmail.com',
  //     socialAccounts: [
  //       {name: 'Instagram'},
  //       {name: 'Facebook'},
  //       {name: 'Youtube'},
  //       {name: 'LinkedIn'},
  //     ]
  //   },
  //   {
  //     name: 'Saad',
  //     email: 'saad@gmail.com',
  //     socialAccounts: [
  //       {name: 'Youtube'},
  //       {name: 'LinkedIn'},
  //       {name: 'Instagram'},
  //       {name: 'Facebook'},
  //     ]
  //   }
  // ]

  color: string = 'white'
  backgroundColor: string = 'black'
  fs = '20px'
  changeColor() {
    this.color = 'black'
    this.backgroundColor = 'lightgray'
    this.fs = '30px'
  }
}
