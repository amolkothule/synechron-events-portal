import { Component, Input, Inject, OnInit } from '@angular/core';

import { Employee } from "../models/employee";
import { EmployeeService } from '../services/employee.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
    selector: 'employee-details',
    templateUrl: '../views/employee-details.component.html'
})

export class EmployeeDetailsComponent implements OnInit{
    constructor(
        @Inject(EmployeeService)
        private _employeeService : EmployeeService,

        @Inject(ActivatedRoute)
        private _route : ActivatedRoute
    ) {

     }

    title: string = "Details of - ";
    employee: Employee;
    employeeId : number;
   // @Input() employee: Employee;

    ngOnInit(): void{
        this._route.params.subscribe(
            (params)=> this.employeeId = params["eid"]
        );

        this._employeeService.getSingleEmployee(this.employeeId).subscribe(

            data =>this.employee = data,
            err => console.log("Error"),
            () => console.log("Service call completed...")
        );
    }
}