import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeService } from './employee-details/employee-service';
import { HttpClientModule } from '@angular/common/http';
import { EmployeelistComponent } from './employee-details/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    EmployeelistComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,

    AppRoutingModule
  ],
  exports: [FormsModule],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
