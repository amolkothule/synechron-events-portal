import { Component, OnInit, Inject } from '@angular/core';

import { Employee } from "../models/employee";
import { EmployeeService } from "../services/employee.service";

import { ENGINE_METHOD_CIPHERS } from 'constants';
import { HttpClient } from '../../../node_modules/@angular/common/http';

@Component({
    selector: 'employees-list',
    templateUrl: '../views/employees-list.component.html'
})

export class EmployeesListComponent implements OnInit {
    constructor(
        @Inject(EmployeeService)
        private _employeeService: EmployeeService
    ) {

    }

    title: string = "Synechron Employees List!";
    subTitle: string = "Core Development Team!";
    selectedEmployee: Employee;
    employees: Employee[];
    searchChar: string = "";

    ngOnInit(): void {
        this._employeeService.getAllEmployee().subscribe(
            data => this.employees = data,
            err => console.log(err),
            () => console.log("events service call finished!")
        );
    }

    onEmployeeSelection(emp: Employee): void {
        this.selectedEmployee = emp;
        console.log(this.selectedEmployee);
    }
}