import { maxInt, minInt } from "../constants";
import { BaseValueValidator } from "./base";

export class IntValidator extends BaseValueValidator {
    value(value) {
        const base = super.value(value);
        if (base) {
            return base;
        }
        if (typeof value !== 'string') {
            value = value.toString();
        }
        if (/^-?\d+$/.test(value)) {
            return "Value must be an integer number";
        }
        value = +value;
        if (value < minInt || value > maxInt) {
            return `Value must be integer in range [${minInt}, ${maxInt}]`;
        }
        return null;
    }
}