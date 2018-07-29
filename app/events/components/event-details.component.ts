import { Component, Input, Output, EventEmitter, OnChanges, Inject, OnInit } from '@angular/core';

import { SepEvent } from "../models/sep-event";
import { SepEventsServices } from '../services/sep-events.service';
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'event-details',
    templateUrl: '../views/event-details.component.html'
})

export class EventDetailsComponent implements OnInit{
    constructor(
        @Inject(SepEventsServices) 
        private _eventService : SepEventsServices,
        
        @Inject(ActivatedRoute)
        private _activatedRoute : ActivatedRoute
        ) { 

        }

    title: string = "Details Of Event - ";
    event: SepEvent;
    eventId : number;
 
    ngOnInit(): void{
        this._activatedRoute.params.subscribe(
            (params)=> this.eventId = params["id"]            
        );

        this._eventService.getSingleEvent(this.eventId).subscribe(

            data =>this.event = data,
            err => console.log("Error"),
            () => console.log("Service call completed...")
        );
    }
   // @Input("receivedEventId") eventId: number;
   // @Output("onConfirmation") sendConfirmation: EventEmitter<string> = new EventEmitter<string>();

    // onSendConfirmation(): void {
    //     this.sendConfirmation.emit("Received Event Successfully!");
    // }

    // ngOnChanges(): void{
    //     this.event = this._eventService.getSingleEvent(this.eventId);
    // }
}