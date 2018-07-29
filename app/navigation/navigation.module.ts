import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SepNavbarComponent } from './components/sep-navbar.component';
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [
        CommonModule, RouterModule
    ],
    exports: [
        SepNavbarComponent
    ],
    declarations: [
        SepNavbarComponent
    ],
    providers: [],
})
export class SepNavbarModule { }
