export class Mark {
    private _markId: Number;
    private _value: Number;
    private _date: Date;

    constructor(markId?: Number, value?: Number, date?: Date) {
        this._markId = markId;
        this._value = value;
        this._date = date;
    }

    get markId(): Number {
        return this._markId;
    }

    get value(): Number {
        return this._value;
    }

    get date(): Date {
        return this._date;
    }

    set markId(value: Number) {
        this._markId = value;
    }

    set value(value: Number) {
        this._value = value;
    }

    set date(value: Date) {
        this._date = value;
    }
}
