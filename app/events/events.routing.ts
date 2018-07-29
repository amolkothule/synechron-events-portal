import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { EventListComponent } from "./components/events-list.components";
import { EventDetailsComponent } from "./components/event-details.component";
import { NewEventComponent } from "./components/new-event.component";

const eventRoutes : Routes = [
    {
        path: '',
        component : EventListComponent
    },
    {
        path: 'new',
        component : NewEventComponent
    },
    {
        path: ':id',
        component : EventDetailsComponent
    }
];

export const eventsRoutes: ModuleWithProviders = RouterModule.forChild(eventRoutes);