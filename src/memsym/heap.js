export class Heap {
    // printable chars /[\x00-\x08\x0E-\x1F]/.test(data)
    #memory;

    constructor(size = 64) {
        this.#memory = Array(size).fill(0);
    }

    get data() {
        return [...this.#memory];
    }
}