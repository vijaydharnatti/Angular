import { Component, OnInit } from '@angular/core';
import { EmployeeDetails } from './employee.model';
import { FormsModule, NgForm } from "@angular/forms";
import { EmployeeService } from './employee-service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styles: [
  ]
})
export class EmployeelistComponent implements OnInit {
  //EmpDetails: EmployeeDetails = new EmployeeDetails();
  public EmpDetails: Array<EmployeeDetails>;



  constructor(public service: EmployeeService) { }

  ngOnInit(): void {
    this.GetEmployeeDetails();
  }

  public GetEmployeeDetails() {
    var _me = this;
    this.service.GetEmployeeDetails().subscribe(
      function (res) {
        _me.EmpDetails = res;
      },
      function (rejection) {
        console.log(rejection);
      });

    
  }
 

}
