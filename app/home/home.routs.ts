import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { SepHomeComponent } from "./components/sep-home.coponent";


const homeRoute : Routes = [
    {
        path: '',
        component : SepHomeComponent
    }
];

export const homeRoutes: ModuleWithProviders = RouterModule.forChild(homeRoute);