import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserListComponent } from './user-list/user-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CounterComponent } from './counter/counter.component';
import { HeaderComponent } from './header/header.component';

import {FormsModule} from '@angular/forms'

// import { StudentAuthModule } from './student-auth/student-auth.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserListComponent,
    StudentListComponent,
    CountryListComponent,
    CounterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    // StudentAuthModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
