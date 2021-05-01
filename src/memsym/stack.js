import { DataType } from "./data-type";
import { Record } from "./record";

export class Stack {
    #records;

    constructor(size = 8) {
        this.size = size;
        this.initialize();
    }

    initialize() {
        const records = [];
        for (let i = 0; i < this.size; i++) {
            records.push(new Record(DataType.NULL, null, 0));
        }
        this.#records = records;
    }

    get records() { 
        return [...this.#records]
    }

    clear() {
        this.initialize();
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
            records.push(record);
        } else {
            records[index] = record;
        }
    }
}