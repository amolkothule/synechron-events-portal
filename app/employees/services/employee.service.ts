import { Injectable , Inject} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {  } from "module";
import { Employee } from "../models/employee";

@Injectable(
    
)

export class EmployeeService{
    constructor(
        @Inject(HttpClient)
        private _http : HttpClient
    ){

    }
    
    getAllEmployee() : Observable<Employee[]> {
        return this._http.get<Employee[]> ("http://localhost:9090/api/employees");

    }
    
   

    getSingleEmployee(eid : number) :  Observable<Employee>{
        console.log("I am searching boss with emp id "+eid);
        return this._http.get<Employee> ("http://localhost:9090/api/employees/"+eid);
    }

    registerNewEmployee(employee: Employee):Observable<string> {    
        console.log("Adding enw emp >>>" + employee.employeeName);

        return this._http.post<string>("http://localhost:9090/api/employees", employee);
    }
}