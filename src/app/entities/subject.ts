export class Subject {
    public subjectId: number;
    public name: string;
    public room: number;

    constructor(data: any = {}) {
        this.subjectId = data.subjectId || -1;
        this.name = data.name || '';
        this.room = data.room || -1;
    }
}
