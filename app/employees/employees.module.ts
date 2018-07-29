import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EmployeesListComponent } from "./components/employees-list.component";
import { EmployeeDetailsComponent } from "./components/employee-details.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { employeesRoutes } from "./employees.routing";
import { NewEmployeeComponent } from "./components/new-employee.component";
import { HttpClientModule } from "@angular/common/http";
import { EmployeeService } from "./services/employee.service";
import { FilterByPipe } from "./pipes/filter-by.pipes";

@NgModule({
    imports: [
        CommonModule,
        employeesRoutes,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    exports: [
        EmployeesListComponent
    ],
    declarations: [
        EmployeesListComponent,
        EmployeeDetailsComponent,
        NewEmployeeComponent,
        FilterByPipe
    ],
    providers: [
        EmployeeService
    ]
})
export class EmployeesModule {

}