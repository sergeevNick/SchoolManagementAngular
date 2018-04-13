export class Name {
    private _nameId: Number;
    private _firstName: string;
    private _secondName: string;
    private _lastName: string;

    constructor(nameId?: Number, firstName?: string, secondName?: string, lastName?: string) {
        this._nameId = nameId;
        this._firstName = firstName;
        this._secondName = secondName;
        this._lastName = lastName;
    }

    get nameId(): Number {
        return this._nameId;
    }

    get firstName(): string {
        return this._firstName;
    }

    get secondName(): string {
        return this._secondName;
    }

    get lastName(): string {
        return this._lastName;
    }

    set nameId(value: Number) {
        this._nameId = value;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    set secondName(value: string) {
        this._secondName = value;
    }

    set lastName(value: string) {
        this._lastName = value;
    }
}
