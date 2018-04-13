import { Name } from './Name';
import { OtherInfo } from './OtherInfo';

export class Student {
    private _studentId: Number;
    private _name: Name;
    private _otherInfo: OtherInfo;

    constructor(studentId?: Number, name?: Name, otherInfo?: OtherInfo) {
        this._studentId = studentId;
        this._name = name;
        this._otherInfo = otherInfo;
    }

    get studentId(): Number {
        return this._studentId;
    }

    get name(): Name {
        return this._name;
    }

    get otherInfo(): OtherInfo {
        return this._otherInfo;
    }

    set studentId(value: Number) {
        this._studentId = value;
    }

    set name(value: Name) {
        this._name = value;
    }

    set otherInfo(value: OtherInfo) {
        this._otherInfo = value;
    }
}
