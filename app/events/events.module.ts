//components
import { JphPostsListComponent } from '../jph/components/jph-posts-list.component';
import { EventDetailsComponent } from './components/event-details.component';
import { EventListComponent } from './components/events-list.components';
import { RouterModule } from "@angular/router";
//pipes

//services
import { HttpClientModule } from "@angular/common/http";

import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';


import { FirstLetterCapitalPipe } from "./pipes/first-letter-capital.pipes";
import { FilterByPipe } from "./pipes/filter-by.pipes";
import { SepEventsServices } from "./services/sep-events.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { eventsRoutes } from './events.routing';
import { NewEventComponent } from './components/new-event.component';

@NgModule({
    imports: [ 
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
        eventsRoutes
    ],
    exports: [
        EventListComponent
    ],
    declarations: [
        EventListComponent,
        EventDetailsComponent,
        NewEventComponent,
        FirstLetterCapitalPipe,
        FilterByPipe        
    ],
    providers: [
        SepEventsServices
    ],
})
export class EventsModule { }
