export class ErrorMessage {
    constructor(
        public forControl: string,
        public forValidator: string,
        public text: string
    ){}
}

export const VaccinedateFormErrorMessages = [
    new ErrorMessage('maximum_attendees', 'required', 'Die maximale Teilnehmeranzahl muss angegeben werden!'),
    new ErrorMessage('maximum_attendees', 'min', 'Die minimale Teilnehmeranzahl ist 1!'),
    new ErrorMessage('maximum_attendees', 'max', 'Die maximale Teilnehmeranzahl ist 200!'),
    new ErrorMessage('starttime', 'required', 'Die Startzeit des Impftermins muss angegeben werden!'),
    new ErrorMessage('endtime', 'required', 'Die Endzeit des Impftermins muss angegeben werden!'),
    new ErrorMessage('day', 'required', 'Der Impftag muss angegeben werden!')
]