import { Grade } from './grade';


export class User {
    public userId: number;
    public login: string;
    public hash: string;
    public role: string;
    public firstName: string;
    public secondName: string;
    public lastName: string;
    public email: string;
    public address: string;
    public birthDate: Date;
    public grade: Grade;

    constructor(data: any = {}) {
        this.userId = data.userId || -1;
        this.login = data.login || '';
        this.hash = data.hash || '';
        this.role = data.role || '';
        this.firstName = data.firstName || '';
        this.secondName = data.secondName || '';
        this.lastName = data.lastName || '';
        this.email = data.email || '';
        this.address = data.address || '';
        this.birthDate = data.birthDate || '1900-01-01';
        this.grade = data.grade || new Grade();
    }
}
