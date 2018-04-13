export class Grade {
    private _gradeId: Number;
    private _number: string;

    constructor(gradeId?: Number, number?: string) {
        this._gradeId = gradeId;
        this._number = number;
    }

    get gradeId(): Number {
        return this._gradeId;
    }

    get number(): string {
        return this._number;
    }

    set gradeId(value: Number) {
        this._gradeId = value;
    }

    set number(value: string) {
        this._number = value;
    }
}
