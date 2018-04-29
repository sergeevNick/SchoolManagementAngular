import { Day } from './day';
import { ScheduleRow } from './schedule-row';


export class Schedule {
    public scheduleId: number;
    public day: Day;
    public rows: ScheduleRow[];

    constructor(data: any = {}) {
        this.scheduleId = data.scheduleId || -1;
        this.day = data.day || new Day();
        this.rows = data.rows || [new ScheduleRow()];
    }
}
