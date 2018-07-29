//register component here

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { appRouting } from "./app.routing";

//components here
import { AppComponent } from "./app.component";

//module
import { SepNavbarModule } from "./navigation/navigation.module";
// import { EmployeesModule } from "./employees/employees.module";
// import { EventsModule } from "./events/events.module";
// import { JphModule } from "./jph/jph.module";
// import { SepNavbarModule } from "./navigation/navigation.module";
// import { appRouting } from "./app.routing";
// import { HomeModule } from "./home/home.module";

//pipes
//services

@NgModule({
    imports: [
        BrowserModule,
        SepNavbarModule,
        appRouting
    ],
    exports: [],
    declarations: [
        AppComponent
    ],
    providers: [

    ],

    bootstrap: [AppComponent]
})
export class AppModule {

}