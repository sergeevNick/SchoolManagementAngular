export class Day {
    private _dayId: Number
    private _dayName: string;

    constructor(dayId?: Number, dayName?: string) {
        this._dayId = dayId;
        this._dayName = dayName;
    }

    get dayId(): Number {
        return this._dayId;
    }

    get dayName(): string {
        return this._dayName;
    }

    set dayId(value: Number) {
        this._dayId = value;
    }

    set dayName(value: string) {
        this._dayName = value;
    }
}
