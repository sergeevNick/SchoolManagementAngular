import { Day } from './Day';
import { ScheduleRow } from './ScheduleRow';

export class Schedule {
    private _scheduleId: Number;
    private _day: Day;
    private _rows: ScheduleRow[];

    constructor(scheduleId?: Number, day?: Day, rows?: ScheduleRow[]) {
        this._scheduleId = scheduleId;
        this._day = day;
        this._rows = rows;
    }

    get scheduleId(): Number {
        return this._scheduleId;
    }

    get day(): Day {
        return this._day;
    }

    get rows(): ScheduleRow[] {
        return this._rows;
    }

    set scheduleId(value: Number) {
        this._scheduleId = value;
    }

    set day(value: Day) {
        this._day = value;
    }

    set rows(value: ScheduleRow[]) {
        this._rows = value;
    }
}
