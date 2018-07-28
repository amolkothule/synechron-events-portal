import { Component, OnInit, Inject } from '@angular/core';

import { SepEvent } from "../models/sep-event";
import { SepEventsServices } from "../services/sep-events.service";


@Component({
    selector: 'events-list',
    templateUrl: '../views/events-list.component.html'
})

export class EventListComponent implements OnInit {
    constructor(
        @Inject(SepEventsServices)
        private  _eventsService : SepEventsServices)
    { 

    }

    title: string = "Synechron Events List!"
    subTitle: string = "Published by Synechron HR";
    childMessage: string = "";
    selectedEvent: SepEvent;
    searchChar:string = "";
    sepEvents: SepEvent[]  = [];
    
    ngOnInit(): void{
        this._eventsService.getAllEvents().subscribe(
            data=>this.sepEvents = data,
            err => console.log(err),
            () => console.log("events service call finished!")
        );
    }

    onEventSelection(event: SepEvent): void {
        this.selectedEvent = event;
    }

    onChildConfirmation(msg: string): void {
        console.log("on confirmation...");
        this.childMessage = msg;
    }
   
}