import { Component, OnInit, ViewEncapsulation , Inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';


import { EmployeeForm } from '../models/employee-form';
import { EmployeeService } from '../services/employee.service';

@Component({
    selector: 'new-employee',
    templateUrl: '../views/new-employee.component.html',
    styles: ['input.ng-invalid { border-left:3px solid red; } input.ng-valid { border-left:3px solid green; }'],
    encapsulation:ViewEncapsulation.Emulated
})
export class NewEmployeeComponent implements OnInit {
    constructor(
        @Inject(EmployeeService)
        private _employeeService: EmployeeService, 
        @Inject(Router)
        private _router: Router) {

    }
    employee: EmployeeForm = new EmployeeForm();
    pageTitle: string = "New Employee Registration Form";
    ngOnInit() {
    }
    registerNewEmployee(): void {
        console.log("register new employee");
        this._employeeService.registerNewEmployee(this.employee.employeeForm.value).subscribe(
            data => this._router.navigateByUrl("/employees"),
            error => console.log(error),
            () => console.log("Service call completed!")
        );
    }
}