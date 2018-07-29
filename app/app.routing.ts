import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";




const defaultRoute : Routes = [
    {
        path: '',
        loadChildren : './home/home.module#HomeModule'
    }
];

const homeRoute : Routes = [
    {
        path: 'home',
        loadChildren : './home/home.module#HomeModule'
    }
];

const empRoute : Routes = [
    {
        path: 'employees',
        loadChildren : './employees/employees.module#EmployeesModule'
    }
];


const eventRoute : Routes = [
    {
        path: 'events',
        loadChildren : './events/events.module#EventsModule'
    }
];



const jphRoute : Routes = [
    {
        path: 'jph',
        loadChildren : './jph/jph.module#JphModule'
    }
];

const appRoutes: Routes = [
    ...homeRoute,
    ...empRoute,
    ...eventRoute,
    ...jphRoute,    
    ...defaultRoute
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);