import { Component, OnInit } from '@angular/core';
import { EmployeeDetails } from './employee.model';
import { FormsModule, NgForm } from "@angular/forms";
import { EmployeeService } from './employee-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styles: [
  ]
})
export class EmployeeDetailsComponent implements OnInit {
  formData: EmployeeDetails = new EmployeeDetails();
  value: any;

  constructor(public service: EmployeeService, private router: Router) { }

  ngOnInit(): void {
  }

  public EmployeeDetails(values:any) {
    var _me = this;
    this.service.EmployeeDetails(values).subscribe(
      res => {
        this.router.navigate(['/list']);
      },
      err => {
        console.log(err);
      }

    );
  }

}
