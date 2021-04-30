export const type = {
  INT: 0,
  UINT: 1,
  BOOL: 2,
  STRING: 3
}

export class StructConvert {
  #int;

  constructor() {
    const buffer = new ArrayBuffer(1);
    this.#int = new Uint8Array(buffer);
  }

  toInt(uintValue) {
    this.#int[0] = uintValue;
    return this.#int[0];
  }

  toUint(uintValue) {
    return uintValue;
  }

  toBool(uintValue) {
    return +uintValue > 0 ? 'true' : 'false';
  }

  toBinary(uintValue) {
    const uint = this.toInt(uintValue);
    return uint.toString(2).padStart(8, '0');
  }

  displayType(typeCode) {
    switch(typeCode) {
      case type.INT:
        return 'int';
      case type.UINT:
        return 'uint';
      case type.BOOL:
        return 'bool';
      case type.STRING:
        return 'string';
      default:
        return typeCode;
    }
  }
}

export class StringReader {
  constructor(heap) {
    this.heap = heap;
  }

  get(index) {
    const array = this.heap.toArray();
    let result = '';
    while(index < array.length && array[index] !== 0) {
      result += array[index++];
    }
    return result;
  }
}