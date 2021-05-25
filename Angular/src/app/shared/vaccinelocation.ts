import { Vaccinations } from "./vaccinations";
export { Vaccinations } from "./vaccinations";

export class Vaccinelocation {
    constructor(
        public id: number,
        public zip: number,
        public city: string,
        public street: string,
        public vaccinations: Vaccinations[],
        public description?: string){
        
    }
}
