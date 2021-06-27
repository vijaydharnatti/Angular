import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { EmployeeDetails } from "./employee.model";
import { AppSettings } from "../Framework/AppSetting";
import { Observable } from "rxjs";
import { tap } from 'rxjs/internal/operators/tap';



@Injectable()
export class EmployeeService {

  ServiceBaseUrl: string = AppSettings.EmpService;

  constructor(public http: HttpClient) {
  }

  public EmployeeDetails(EmpDetails:any): Observable<any> {
    return this.http.post<any>(this.ServiceBaseUrl + "EmployeeDetail/AddEmployee", EmpDetails).pipe(
      tap(res => res)
    );
  }
  public GetEmployeeDetails(): Observable<any> {
    return this.http.get<any>(this.ServiceBaseUrl + "EmployeeDetail/Get").pipe(
      tap(res => res)
    );
  }
}
