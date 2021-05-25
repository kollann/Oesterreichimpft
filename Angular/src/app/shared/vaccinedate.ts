import { Vaccinations } from "./vaccinations";

export class Vaccinedate {
    constructor(
        public id: number,
        public day: Date,
        public starttime: Date ,
        public endtime: Date,
        public maximum_attendees: number,
        public vaccinations: Vaccinations[]){
    }
} 
