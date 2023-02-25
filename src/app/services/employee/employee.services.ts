import { Injectable } from "@angular/core";
import { Employee } from "./employee";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn:'root'
})

export class EmployeeService{
    private apiUrl ='';

    constructor(private http: HttpClient){}

    public getEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>(`${this.apiUrl}/employee/all`);
    }

    public addEmployee(employee : Employee): Observable<Employee> {
        return this.http.post<Employee>(`${this.apiUrl}/employee/add`,employee);
    }

    public updateEmployee(employee : Employee): Observable<Employee> {
        return this.http.put<Employee>(`${this.apiUrl}/employee/add`,employee);
    }

    public deleteEmployee(employeeId : number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/employee/delete/${employeeId}`);
    }
}