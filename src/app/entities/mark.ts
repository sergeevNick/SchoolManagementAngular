export class Mark {
    public markId: number;
    private markValue: number;
    public date: Date;

    constructor(data: any = {}) {
        this.markId = data.markId || -1;
        this.value = data.value;
        this.date = data.date || Date.now();
    }

    get value(): number {
        return this.value;
    }

    set value(value: number) {
        if (value > 5) {
            value = 5;
        }
        if (value < 2) {
            value = 2;
        }
        this.markValue = value;
    }
}
