import { DataType } from "../data-type";
import { BoolValidator } from "./bool";
import { CharValidator } from "./char";
import { IntValidator } from "./int";
import { StringValidator } from "./string";



export class Validator {
    constructor(memsym) {
        this.map = {
            [DataType.INT]: new IntValidator(memsym),
            [DataType.CHAR]: new CharValidator(memsym),
            [DataType.STRING]: new StringValidator(memsym),
            [DataType.BOOL]: new BoolValidator(memsym),
        }
    }

    validateLabel(label) {
        if (!label) {
            return 'Label is required';
        }
        if (nameRegex.test(label)) {
            if (this.#memsym.records.find(x => x.label === label)) {
                return 'Label is already defined';
            }
            return null;
        }
        return "Wrong label";
    }

    validateValue(dataType, value) {
        const validator = this.map[dataType];
        if (!validator) {
            alert(`Unknown validator dataType ${dataType}`);
            throw Error(`Unknown validator dataType ${dataType}`);
        }
        return alidator.value(value);
    }
}