import { DataType } from "./data-type";
import { Record } from "./record";

export class Stack {
    #records;

    constructor(size = 8) {
        const records = [];
        for (let i = 0; i < size; i++) {
            records.push(new Record(DataType.NULL, null, 0));
        }
        this.#records = records;
    }

    get records() { 
        return [...this.#records]
    }

    push(record) {
        let index = 0;
        let found = false;
        const records = this.#records;

        while (!found && index < records.length) {
            if (records[index].dataType === DataType.NULL) {
                found = true;
                break;
            }
            index++;
        }
        if (!found) {
            records.push(records);
        } else {
            records[index] = record;
        }
    }
}