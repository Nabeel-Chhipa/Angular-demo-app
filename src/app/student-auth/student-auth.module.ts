import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentLoginComponent } from './student-login/student-login.component';


@NgModule({
  declarations: [
    StudentLoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StudentLoginComponent
  ]
})
export class StudentAuthModule { }
