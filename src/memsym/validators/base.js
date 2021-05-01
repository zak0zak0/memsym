import {nameRegexString} from '../constants';

const nameRegex = new RegExp(`^${nameRegexString}$`);

export class BaseValueValidator {
    constructor(memsym) {
        this.#memsym = memsym;
    }

    value(value) {
        if (value !== 0 && !value) {
            return 'Value is required';
        }
        return null;
    }
}