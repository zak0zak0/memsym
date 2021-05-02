import { tokenType } from "./token";
import { DeclarationNode } from './nodes/declaration';

export class ParserError extends Error {
    constructor(token) {
        super(`Unexpected token [${token}]`);
        this.name = "ParserError";
    }
}

const declarationValueTokenTypes = [tokenType.NUMBER, tokenType.STRING, tokenType.CHAR, tokenType.BOOL];

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
            throw new ParserError(token[1]);
        }
        const name = tokens[1].value;
        if (tokens[2]?.type !== tokenType.EQUAL) {
            throw new ParserError(token[2]);
        }
        if (!declarationValueTokenTypes.includes(tokens[3].type)) {
            throw new ParserError(token[3]);
        }
        const value = tokens[3].value;
        return new DeclarationNode(type, name, value);
    }
}