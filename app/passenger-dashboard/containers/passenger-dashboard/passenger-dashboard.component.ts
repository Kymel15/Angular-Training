import {Component, OnInit} from '@angular/core';
import {Passenger} from '../../models/passenger.interface';
import { EventManager } from '@angular/platform-browser';
import {PassengerDashboardService} from '../../passenger-dashboard.service';

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    template: `
    <div>
        <passenger-count
            [items]="passengers"
        >    
        </passenger-count>
        <div *ngFor="let passenger of passengers;">
            {{passenger.fullName}}
        </div>
        <passenger-detail
            *ngFor="let passenger of passengers;"
            [detail]="passenger"
            (edit)="onEdit($event)"
            (remove)="onRemove($event)"
        >
        </passenger-detail>
    </div>
    `
})

export class PassengerDashboardComponent implements OnInit{
    passengers: Passenger[];
    constructor(private passengerService: PassengerDashboardService){}
    ngOnInit(){        
        this.passengerService
            .getPassengers()
            .subscribe((data: Passenger[])=>{
                console.log('Data: ', data);
                this.passengers = data;
            });
    }    

    onRemove(event: Passenger){
        this.passengerService
            .removePassenger(event)
            .subscribe((data: Passenger) =>{
                this.passengers = this.passengers.filter(((element)=>{
                    return element.id != event.id;
                }));
            });        
    }

    onEdit(event: Passenger){
        this.passengerService
            .updatePassenger(event)
            .subscribe((data: Passenger)=>{
                this.passengers = this.passengers.map((element)=>{
                    if(element.id == event.id){
                        element = Object.assign(element, event);
                    }
                    return element;
                });
            });        

        console.log(this.passengers);
    }
}