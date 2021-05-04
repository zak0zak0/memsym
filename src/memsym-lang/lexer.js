import { Token, tokenType } from './token';

const digitRegex = /^\d$/;
const minus = '-';
const startCharRegex = /^[_a-zA-Z]$/
const nameCharRegex = /^[_a-zA-Z0-9]$/
const equal = '=';
const spaceRegex = /^\s$/;
const typeRegex = /^(int|char|bool|string)$/i;
const boolRegex = /^(true|false)$/i;
const doubleQuote = '"';
const singleQuote = "'";

const tt = tokenType;

export class LexerError extends Error {
    constructor(char, pos) {
        super(`Unexpected char "${char}" at position #${pos}`);
        this.name = "LexerError";
    }
}

export class Lexer {
    parse(line) {
        let i = 0;
        const tokens = [];
        while (i < line.length) {
            while (i < line.length && spaceRegex.test(line[i])) {
                i++;
            }
            if (i >= line.length) {
                break;
            }
            const char = line[i];
            if (char === equal) {
                tokens.push(new Token(tt.EQUAL, char));
                i++;
                continue;
            }
            if (char === minus) {
                i++;
                const nextChar = line[i];
                if (!digitRegex.test(nextChar)) {
                    throw new LexerError(nextChar, i);
                }
                const [index, number] = this.readNumber(line, i);
                tokens.push(new Token(tt.NUMBER, -number));
                i = index;
                continue;
            }
            if (digitRegex.test(char)) {
                const [index, number] = this.readNumber(line, i);
                tokens.push(new Token(tt.NUMBER, number));
                i = index;
                continue;
            }
            if (startCharRegex.test(char)) {
                const [index, nameRest] = this.readName(line, i + 1);
                const name = char + nameRest;
                if (typeRegex.test(name)) {
                    tokens.push(new Token(tt.TYPE, name));
                } else if (boolRegex.test(name)) {
                    tokens.push(new Token(tt.BOOL, name));
                } else {
                    tokens.push(new Token(tt.NAME, name));
                }
                i = index;
                continue;
            }
            if (char === singleQuote) {
                const [index, symbol] = this.readChar(line, i);
                i = index;
                tokens.push(new Token(tt.CHAR, symbol));
                continue;
            }
            if (char === doubleQuote) {
                const [index, string] = this.readString(line, i + 1);
                i = index;
                tokens.push(new Token(tt.STRING, string));
                continue;
            }
        }
        return tokens;
    }

    readString(line, i) {
        let result = '';
        while (i < line.length && line[i] !== doubleQuote) {
            result += line[i];
            i++;
        }
        if (i >= line.length || line[i] !== doubleQuote) {
            throw new LexerError(line[i], i);
        }
        return [i + 1, result];
    }

    readChar(line, i) {
        if (i + 1 >= line.length) {
            throw new LexerError(line[i], i);
        }
        const symbol = line[i + 1];
        if (i + 2 >= line.length) {
            throw new LexerError(symbol, i + 1);
        }
        if (line[i + 2] !== singleQuote) {
            throw new LexerError(line[i + 2], i + 2);
        }
        return [i + 3, symbol];
    }

    readName(line, i) {
        let result = '';
        while (i < line.length && nameCharRegex.test(line[i])) {
            result += line[i];
            i++;
        }
        return [i, result];
    }

    readNumber(line, i) {
        let result = '';
        while (i < line.length && digitRegex.test(line[i])) {
            result += line[i];
            i++;
        }
        if (i < line.length) {
            if (nameCharRegex.test(line[i])) {
                throw new LexerError(line[i], i);
            }
        }
        return [i, +result];
    }
}