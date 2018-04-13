export class Subject {
    private _subjectId: Number;
    private _name: string;
    private _room: Number;

    constructor(subjectId?: Number, name?: string, room?: Number) {
        this._subjectId = subjectId;
        this._name = name;
        this._room = room;
    }

    get subjectId(): Number {
        return this._subjectId;
    }

    get name(): string {
        return this._name;
    }

    get room(): Number {
        return this._room;
    }

    set subjectId(value: Number) {
        this._subjectId = value;
    }

    set name(value: string) {
        this._name = value;
    }

    set room(value: Number) {
        this._room = value;
    }
}
