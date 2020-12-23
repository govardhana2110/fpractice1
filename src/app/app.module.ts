import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from "@angular/common/http";
import { AddempComponent } from './employee/addemp/addemp.component';
import { EditempComponent } from './employee/editemp/editemp.component';
import { MatTableModule } from "@angular/material/table";
import { MatSliderModule } from "@angular/material/slider";

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AddempComponent,
    EditempComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSliderModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
