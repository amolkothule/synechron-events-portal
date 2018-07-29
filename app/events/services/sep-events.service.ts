import { Injectable , Inject} from "@angular/core";
import { SepEvent } from "../models/sep-event";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {  } from "module";

@Injectable(
    
)

export class SepEventsServices{
    constructor(
        @Inject(HttpClient)
        private _http : HttpClient
    ){

    }
    
    getAllEvents() : Observable<SepEvent[]> {
        return this._http.get<SepEvent[]> ("http://localhost:9090/api/events");

    }
    
   
    getSingleEvent(id : number) :  Observable<SepEvent>{
        return this._http.get<SepEvent> ("http://localhost:9090/api/events/"+id);
    }

    registerNewEvent(event: Event):Observable<string> {
        return this._http.post<string>("http://localhost:9090/api/events", event);
    }
}