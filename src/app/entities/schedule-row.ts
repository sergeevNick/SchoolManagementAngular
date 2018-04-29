import { Lesson } from './lesson';
import { Subject } from './subject';
import { User } from './user';


export class ScheduleRow {
    public scheduleRowId: number;
    public lesson: Lesson;
    public teacher: User;
    public subject: Subject;

    constructor(data: any = {}) {
        this.scheduleRowId = data.scheduleRowId || -1;
        this.lesson = data.lesson || new Lesson();
        this.teacher = data.teacher || new User();
        this.subject = data.subject || new Subject();
    }
}
