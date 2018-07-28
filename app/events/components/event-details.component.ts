import { Component, Input, Output, EventEmitter, OnChanges, Inject } from '@angular/core';

import { SepEvent } from "../models/sep-event";
import { SepEventsServices } from '../services/sep-events.service';

@Component({
    selector: 'event-details',
    templateUrl: '../views/event-details.component.html'
})

export class EventDetailsComponent implements OnChanges{
    constructor(
        @Inject(SepEventsServices) 
        private _eventService : SepEventsServices) { 

        }

    title: string = "Details Of Event - ";
    event: SepEvent;
    @Input("receivedEventId") eventId: number;
    @Output("onConfirmation") sendConfirmation: EventEmitter<string> = new EventEmitter<string>();

    onSendConfirmation(): void {
        this.sendConfirmation.emit("Received Event Successfully!");
    }

    ngOnChanges(): void{
        this.event = this._eventService.getSingleEvent(this.eventId);
    }
}