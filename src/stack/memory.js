import { type } from "./display";

export class Record {
  name;
  type;
  value;

  constructor(name, type, value) {
    this.name = name;
    this.type = type;
    this.value = value;
  }
}

class Heap {
  #memory;
  size;

  empty = true;
  start = 120;

  constructor(size) {
    this.size = size;
    this.#memory = Array(size);
    for (let i = 0; i < 50; i++) {
      this.#memory[i] = 0;
    }
  }

  alloc(value) {
    if (typeof value !== 'string') {
      throw new Error('expected string');
    }
    let i = this.size - 1;
    while (i > 0 && this.#memory[i] === 0) {
      i--;
    }
    if (i !== 0) {
      i++;
    }
    
    if (i >= this.size) {
      throw new Error('out of memory');
    }
    const index = i;
    for (let c of value) {
      this.#memory[i++] = c.charCodeAt(0);
    }
    this.#memory[i++] = 0;
    this.empty = false;
    return index + this.start;
  }

  toArray() {
    return this.#memory;
  }
}

export default class Memory {
  #stack = [];
  #heap = new Heap(50);
  callback;

  copy() {
    const inst = new Memory();
    inst.#heap = this.#heap;
    inst.#stack = this.#stack;
    inst.callback = this.callback;
    return inst;
  }

  get stack() {
    return this.#stack;
  }

  get heap() {
    return this.#heap;
  }

  onUpdate(callback) {
    this.callback = callback;
  }

  declareVariable(record) {
    switch (record.type) {
      case type.UINT:
      case type.INT:
        break;
      case type.BOOL:
        record.value = record.value ? 1 : 0;
        break;
      case type.STRING:
        const index = this.#heap.alloc(record.value);
        record.value = index;
        break;
      default:
        break;
    }
    this.#stack.push(record);
    if (this.callback) {
      this.callback();
    } 
  }
}