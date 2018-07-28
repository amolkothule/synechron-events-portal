//register component here

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";


//components here
import { AppComponent } from "./app.component";
import { EmployeesListComponent } from "./employees/components/employees-list.component";
import { EmployeeDetailsComponent } from "./employees/components/employee-details.component";
import { EventListComponent } from "./events/components/events-list.components";
import {  EventDetailsComponent } from "./events/components/event-details.component";
import { JphPostsListComponent } from "./jph/components/jph-posts-list.component";

//pipes
import { FirstLetterCapitalPipe } from "./events/pipes/first-letter-capital.pipes";
import { FilterByPipe } from "./events/pipes/filter-by.pipes";

//services
import { SepEventsServices } from "./events/services/sep-events.service";
import { JphService } from "./jph/services/jph.service";


@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule],
    exports: [],
    declarations: [
        AppComponent, 
        EmployeesListComponent, 
        EmployeeDetailsComponent,
        EventListComponent,
        EventDetailsComponent,
        JphPostsListComponent,
        FirstLetterCapitalPipe,
        FilterByPipe        
    ],
    providers: [
        SepEventsServices,
        JphService
    ],
    
    bootstrap: [AppComponent]
})
export class AppModule {

}