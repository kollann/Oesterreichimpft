import { UserPivot } from "./UserPivot";

export class User {
    constructor(
        public id: number,
        public firstname: string,
        public lastname: string,
        public gender: string,
        public svnr: number,
        public email: string,
        public password?: string,
        public telenumber?: number,
        public pivot?: UserPivot){    
    }
}
