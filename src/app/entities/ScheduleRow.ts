import { Lesson } from './Lesson';
import { Teacher } from './Teacher';
import { Subject } from './Subject';

export class ScheduleRow {
    private _scheduleRowId: Number;
    private  _lesson: Lesson;
    private  _teacher: Teacher;
    private  _subject: Subject;

    constructor(scheduleRowId?: Number, lesson?: Lesson, teacher?: Teacher, subject?: Subject) {
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

    get teacher(): Teacher {
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

    set teacher(value: Teacher) {
        this._teacher = value;
    }

    set subject(value: Subject) {
        this._subject = value;
    }
}
