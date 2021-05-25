import { DatePipe } from '@angular/common';
import { Vaccinedate } from './vaccinedate';

export class VaccinedateFactory {
    static empty(): Vaccinedate {
        return new Vaccinedate(null, new Date(), new Date(), new Date(), null, []);
    }

    static fromObject(rawVaccinedate: any) : Vaccinedate {
        const vaccinedate: Vaccinedate = new Vaccinedate( 
            rawVaccinedate.id,
            typeof(rawVaccinedate.day) === 'string' ? new Date(rawVaccinedate.day) : rawVaccinedate.day,
            typeof(rawVaccinedate.starttime) === 'string' ? new Date(rawVaccinedate.day + " " + rawVaccinedate.starttime) : rawVaccinedate.starttime,
            typeof(rawVaccinedate.endtime) === 'string' ? new Date(rawVaccinedate.day + " " + rawVaccinedate.endtime) : rawVaccinedate.endtime,
            rawVaccinedate.maximum_attendees,
            rawVaccinedate.vaccinations
        );
        
        // to remove timezone from date object
        let userTimezoneOffset = vaccinedate.starttime.getTimezoneOffset() * 60000;
        vaccinedate.starttime = new Date(vaccinedate.starttime.getTime() - userTimezoneOffset);
        vaccinedate.endtime = new Date(vaccinedate.endtime.getTime() - userTimezoneOffset);

        return vaccinedate;
    }
}
