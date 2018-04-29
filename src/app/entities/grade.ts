export class Grade {
    public gradeId: number;
    public number: string;

    constructor(data: any = {}) {
        this.gradeId = data.gradeId || -1;
        this.number = data.number || '';
    }
}
