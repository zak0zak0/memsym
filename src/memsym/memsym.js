import { Record } from "./record";
import { Stack } from "./stack";

export class MemSym {
    #stack;

    constructor() {
        this.#stack = new Stack();        
    }

    declare(dataType, label, value) {
        const record = new Record(dataType, label, value);
        this.#stack.push(record);
        console.log('var declared: ', record);
    }

    get records() {
        return this.#stack.records;
    }
}