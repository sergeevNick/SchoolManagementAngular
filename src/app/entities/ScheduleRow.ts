import { Lesson } from './Lesson';
import { Subject } from './Subject';
import { User } from './User';

export class ScheduleRow {
    private _scheduleRowId: Number;
    private  _lesson: Lesson;
    private  _teacher: User;
    private  _subject: Subject;

    constructor(scheduleRowId?: Number, lesson?: Lesson, teacher?: User, subject?: Subject) {
        this._scheduleRowId = scheduleRowId;
        this._lesson = lesson;
        this._teacher = teacher;
        this._subject = subject;
    }

    get scheduleRowId(): Number {
        return this._scheduleRowId;
    }

    get lesson(): Lesson {
        return this._lesson;
    }

    get teacher(): User {
        return this._teacher;
    }

    get subject(): Subject {
        return this._subject;
    }

    set scheduleRowId(value: Number) {
        this._scheduleRowId = value;
    }

    set lesson(value: Lesson) {
        this._lesson = value;
    }

    set teacher(value: User) {
        this._teacher = value;
    }

    set subject(value: Subject) {
        this._subject = value;
    }
}
