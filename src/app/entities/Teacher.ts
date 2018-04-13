import { Name } from './Name';
import { OtherInfo } from './OtherInfo';

export class Teacher {
    private _teacherId: Number;
    private _name: Name;
    private _otherInfo: OtherInfo;

    constructor(teacherId?: Number, name?: Name, otherInfo?: OtherInfo) {
        this._teacherId = teacherId;
        this._name = name;
        this._otherInfo = otherInfo;
    }

    get teacherId(): Number {
        return this._teacherId;
    }

    get name(): Name {
        return this._name;
    }

    get otherInfo(): OtherInfo {
        return this._otherInfo;
    }

    set teacherId(value: Number) {
        this._teacherId = value;
    }

    set name(value: Name) {
        this._name = value;
    }

    set otherInfo(value: OtherInfo) {
        this._otherInfo = value;
    }
}
