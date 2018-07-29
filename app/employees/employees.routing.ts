import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { EmployeesListComponent } from "./components/employees-list.component";
import { EmployeeDetailsComponent } from "./components/employee-details.component";
import { NewEmployeeComponent } from "./components/new-employee.component";

const empRoute : Routes = [
    {
        path: '',
        component : EmployeesListComponent
    },
    {
        path: 'new',
        component : NewEmployeeComponent
    },
    {
        path: ':eid',
        component : EmployeeDetailsComponent
    }
];

export const employeesRoutes: ModuleWithProviders = RouterModule.forChild(empRoute);