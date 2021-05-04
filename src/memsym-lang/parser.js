import { tokenType } from "./token";
import { DeclarationNode } from './nodes/declaration';
import { DataType } from "../common/data-type";
import { parseDataType } from '../common/utils';

export class ParserError extends Error {
    constructor(token) {
        super(`Unexpected token [${token}]`);
        this.name = "ParserError";
    }
}

const tt = tokenType;

const declarationTypeValueMap = {
    [DataType.INT]: tt.NUMBER,
    [DataType.CHAR]: tt.CHAR,
    [DataType.STRING]: tt.STRING,
    [DataType.BOOL]: tt.BOOL,
};

export class Parser {
    parse(tokens) {
        if (!tokens?.length) {
            return null;
        }
        const token = tokens[0];
        if (token.type === tokenType.TYPE) {
            return this.parseDeclaration(tokens);
        }
        return null;
    }

    parseDeclaration(tokens) {
        const type = tokens[0].value;        
        if (tokens[1]?.type !== tokenType.NAME) {
            throw new ParserError(tokens[1]);
        }
        const name = tokens[1].value;
        if (tokens[2]?.type !== tokenType.EQUAL) {
            throw new ParserError(tokens[2]);
        }
        if (declarationTypeValueMap[parseDataType(type)] !== tokens[3].type) {
            throw new ParserError(tokens[3]);
        }
        const value = tokens[3].value;
        return new DeclarationNode(type, name, value);
    }
}