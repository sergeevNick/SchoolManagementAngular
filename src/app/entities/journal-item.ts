import { Subject } from './subject';
import { Mark } from './mark';


export class JournalItem {
    public subject: Subject;
    public marks: Mark[];

    constructor(data: any = {}) {
        this.subject = data.subject || new Subject();
        this.marks = data.marks || [];
    }
}
