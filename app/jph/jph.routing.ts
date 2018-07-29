import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { JphPostsListComponent } from "./components/jph-posts-list.component";


const jphRoute : Routes = [
    {
        path: 'posts',
        component : JphPostsListComponent
    }
];

export const jphRoutes: ModuleWithProviders = RouterModule.forChild(jphRoute);