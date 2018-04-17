import { Grade } from './Grade';

export class User {
    private _userId: Number;
    private _login: String;
    private _hash: String;
    private _role: String;
    private _firstName: String;
    private _secondName: String;
    private _lastName: String;
    private _email: String;
    private _address: String;
    private _birthDate: Date;
    private _grade: Grade;

    constructor(userId?: Number, login?: String, hash?: String,
                role?: String, firstName?: String,
                secondName?: String, lastName?: String, email?: String,
                address?: String, birthDate?: Date, grade?: Grade) {
        this._userId = userId;
        this._login = login;
        this._hash = hash;
        this._role = role;
        this._firstName = firstName;
        this._secondName = secondName;
        this._lastName = lastName;
        this._email = email;
        this._address = address;
        this._birthDate = birthDate;
        this._grade = grade;
    }

    get userId(): Number {
        return this._userId;
    }

    get login(): String {
        return this._login;
    }

    get hash(): String {
        return this._hash;
    }

    get role(): String {
        return this._role;
    }

    get firstName(): String {
        return this._firstName;
    }

    get secondName(): String {
        return this._secondName;
    }

    get lastName(): String {
        return this._lastName;
    }

    get email(): String {
        return this._email;
    }

    get address(): String {
        return this._address;
    }

    get birthDate(): Date {
        return this._birthDate;
    }

    get grade(): Grade {
        return this._grade;
    }

    set userId(value: Number) {
        this._userId = value;
    }

    set login(value: String) {
        this._login = value;
    }

    set hash(value: String) {
        this._hash = value;
    }

    set role(value: String) {
        this._role = value;
    }

    set firstName(value: String) {
        this._firstName = value;
    }

    set secondName(value: String) {
        this._secondName = value;
    }

    set lastName(value: String) {
        this._lastName = value;
    }

    set email(value: String) {
        this._email = value;
    }

    set address(value: String) {
        this._address = value;
    }

    set birthDate(value: Date) {
        this._birthDate = value;
    }

    set grade(value: Grade) {
        this._grade = value;
    }
}
