import { DataType } from "./data-type";
import { Record } from "./record";
import { Stack } from "./stack";

export class MemSym {
    #stack;

    constructor() {
        this.#stack = new Stack();        
    }

    declare(dataType, label, value) {
        if (+dataType == DataType.CHAR) {
            value = value[0];
        }

        const record = new Record(+dataType, label, value);
        this.#stack.push(record);
        console.log('var declared: ', record);
        console.log(this.records);
    }

    get records() {
        return this.#stack.records;
    }
}