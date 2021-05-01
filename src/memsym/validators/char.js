import { BaseValueValidator } from "./base";

export class CharValidator extends BaseValueValidator {
    value(value) {
        const base = super.value(value);
        if (base) {
            return base;
        }
        if (typeof value !== "string") {
            return "Value must be a string";
        }
        if (value.length > 1) {
            return "Value must be only 1 character long";
        }
        return null;
    }
}