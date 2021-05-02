export class Token {
    constructor(type, value) {
        this.type = type;
        this.value = value;
    }

    toString() {
        return `${this.type}:${this.value}`;
    }
}

export const tokenType = {
    TYPE: 'type', // int|char|bool|string
    NAME: 'name', // identifier
    EQUAL: 'equal', // =
    NUMBER: 'number', // -?\d+
    CHAR: 'char', // single char, should be declared in single quotes
    STRING: 'string', // string, should be declared in double quotes
    BOOL: 'bool', // true|false
}