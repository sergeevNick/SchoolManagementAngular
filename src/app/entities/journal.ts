import { JournalItem } from './journal-item';


export class Journal {
    public studentId: number;
    public journalItems: JournalItem[];

    constructor(data: any = {}) {
        this.studentId = data.studentId || -1;
        this.journalItems = data.journalItems || [];
    }
}
