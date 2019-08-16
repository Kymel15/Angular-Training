import { Baggage } from "./baggage.interface";

export interface Passenger{
    id:number,
    fullName:string,
    checkedIn: boolean,
    checkinDate?: number,
    baggage: string
  }