export class OtherInfo {
    private _infoId: Number;
    private _email: string;
    private _address: string;
    private _birthDate: Date;

    constructor(infoId?: Number, email?: string, address?: string, birthDate?: Date) {
        this._infoId = infoId;
        this._email = email;
        this._address = address;
        this._birthDate = birthDate;
    }

    get infoId(): Number {
        return this._infoId;
    }

    get email(): string {
        return this._email;
    }

    get address(): string {
        return this._address;
    }

    get birthDate(): Date {
        return this._birthDate;
    }

    set infoId(value: Number) {
        this._infoId = value;
    }

    set email(value: string) {
        this._email = value;
    }

    set address(value: string) {
        this._address = value;
    }

    set birthDate(value: Date) {
        this._birthDate = value;
    }
}
