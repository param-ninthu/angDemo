import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/services/employee/employee';
import { EmployeeService } from 'src/app/services/employee/employee.services';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  ngOnInit(): void {
    this.getEmployees();
  }

  public employee!: Employee[];

  constructor(private employeesService : EmployeeService){}

  public getEmployees() : void {
    this.employeesService.getEmployees().subscribe(
      (response: Employee[]) => {
            this.employee = response;
      },
      (error : HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

}
