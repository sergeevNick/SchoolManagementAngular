export class Lesson {
    private _lessonId: Number;
    private _startTime: string;
    private _endTime: string;

    constructor(lessonId?: Number, startTime?: string, endTime?: string) {
        this._lessonId = lessonId;
        this._startTime = startTime;
        this._endTime = endTime;
    }

    get lessonId(): Number {
        return this._lessonId;
    }

    get startTime(): string {
        return this._startTime;
    }

    get endTime(): string {
        return this._endTime;
    }

    set lessonId(value: Number) {
        this._lessonId = value;
    }

    set startTime(value: string) {
        this._startTime = value;
    }

    set endTime(value: string) {
        this._endTime = value;
    }
}
