import { Component, OnChanges, Input, Output, EventEmitter} from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-detail',
    styleUrls: ['passenger-detail.component.scss'],
    template: `
    <div>
        <span class="status" [class.checked-in]="detail.checkedIn">                        
        </span>
        <div *ngIf="editing">
            <input 
            type="text" 
            [value]="detail.fullName"
            (input)="onNameChange(name.value)"
            #name
            >
        </div>
        <div *ngIf="!editing">
            {{detail.fullName}}
        </div>
        <button (click)="toggleClick()">
            {{editing? 'Done' : 'Edit'}}
        </button>
        <button (click)="onRemove()">
            Remove
        </button>
    </div>
    `
})

export class PassengerDetailComponent implements OnChanges{
    @Input()
    detail: Passenger;

    @Output()
    edit: EventEmitter<any> = new EventEmitter();

    @Output()
    remove: EventEmitter<any> = new EventEmitter();    

    editing: boolean = false;

    onNameChange(value:string){
        this.detail.fullName = value;        
    }

    toggleClick(){
        if(this.editing){
            this.edit.emit(this.detail);
        }
        this.editing = !this.editing;
    }

    onRemove(){
        this.remove.emit(this.detail);
    }

    ngOnChanges(changes: any){
        if(changes.detail){
            this.detail = Object.assign({}, changes.detail.currentValue);
        }
        console.log(changes);
    }
}