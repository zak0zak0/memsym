export class Heap {
    // printable chars /[\x00-\x08\x0E-\x1F]/.test(data)
    #memory;

    constructor(size = 64) {
        this.size = size;
        this.#memory = Array(size).fill(0);
    }

    get data() {
        return [...this.#memory];
    }

    read(index) {
        const mem = this.#memory;
        if (index >= mem.length) {
            return '';
        }
        if (mem[index] === 0) {
            return '.';
        }
        const result = [];        
        let i = 0;
        while (i + index < mem.length && mem[i + index] !== 0) {
            result[i] = mem[i + index];
            i++;
        }
        return result.join('');
    }

    alloc(value) {
        if (typeof value !== "string") {
            alert('Unable to allocate non-string value');
            return;
        }
        const length = value.length;
        if (!length) {
            return -1;
        }
        const mem = this.#memory;
        const index = this.findFreeIndex(length);
        if (index === -1) {
            return -1;
        }
        for (let i = 0; i < length; i++) {
            mem[i + index] = value[i];
        }
        return index;
    }

    findFreeIndex(length) {
        let i = 0;
        const mem = this.#memory;
        while (i < this.size) {
            let current = i;
            if (mem[i] === 0) {
                while (current < this.size && current - i < length && mem[current] === 0) {
                    current++;
                }
                if (current === this.size) {
                    return -1;
                }
                if (current - i < length || mem[current] !== 0) {
                    i = current + 1;
                    continue;
                }                
                return i > 0 ? i + 1 : i;
            }
            i++;
        }
    }
}