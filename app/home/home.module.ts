import { NgModule } from '@angular/core';

import { SepHomeComponent } from './components/sep-home.coponent';
import { homeRoutes } from './home.routs';

@NgModule({
    imports: [ homeRoutes],
    exports: [SepHomeComponent],
    declarations: [SepHomeComponent],
    providers: [],
})
export class HomeModule { }
