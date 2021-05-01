import { BaseValueValidator } from "./base";

export class BoolValidator extends BaseValueValidator {
    value(value) {
        const base = super.value(value);
        if (base) {
            return base;
        }
        if (typeof value !== "string") {
            return "Value must be a string 'true' or 'false'";
        }
        if (value.toLowerCase() === "true" || value.toLowerCase() === "false") {
            return null;
        }
        return "Value must be a string 'true' or 'false'";
    }
}