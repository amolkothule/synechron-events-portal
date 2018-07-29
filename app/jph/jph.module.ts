
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

//component
import { JphPostsListComponent } from "./components/jph-posts-list.component";

//service
import { JphService } from './services/jph.service';


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [
        JphPostsListComponent
    ],
    declarations: [
        JphPostsListComponent
    ],
    providers: [
        JphService
    ],
})
export class JphModule { }
