export class Day {
    public dayId: number;
    public dayName: string;

    constructor(data: any = {}) {
        this.dayId = data.dayId || -1;
        this.dayName = data.dayName || '';
    }
}
