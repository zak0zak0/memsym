import { DeclarationNode } from '../nodes/declaration';
import { Parser } from '../parser';
import { Token, tokenType } from '../token';

const tt = tokenType;

it('returns null on empty input', () => {
    const parser = new Parser();
    const input = null;
    const actual = parser.parse(input);
    expect(actual).toBeNull();
});

it('returns null on empty array input', () => {
    const parser = new Parser();
    const input = [];
    const actual = parser.parse(input);
    expect(actual).toBeNull();
});

it('returns DeclarationNode', () => {
    const parser = new Parser();
    const input = [new Token(tt.TYPE, 'int'), new Token(tt.NAME, 'a'), new Token(tt.EQUAL, '='), new Token(tt.NUMBER, '5')];
    const actual = parser.parse(input);
    expect(actual.nodeName).toBe(DeclarationNode.nodeName);
    expect(actual.type).toBe('int');
    expect(actual.name).toBe('a');
    expect(actual.value).toBe('5');
});