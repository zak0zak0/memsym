import { Lexer, LexerError } from '../lexer';

it('returns an empty array if input contains only whitespaces', () => {
    const lexer = new Lexer();
    const line = '        ';
    const actual = lexer.parse(line);
    expect(actual).toEqual([]);
});

it('parses equal token', () => {
    const lexer = new Lexer();
    const line = '=';
    const actual = lexer.parse(line);
    expect(actual.map(x => x.toString())).toEqual(['equal:=']);
});

it('parses type and name tokens', () => {
    const lexer = new Lexer();
    const line = 'int _abc';
    const actual = lexer.parse(line);
    expect(actual.map(x => x.toString())).toEqual(['type:int', 'name:_abc']);
});

it('parses simple positive number declaration', () => {
    const lexer = new Lexer();
    const line = 'int a = 5';
    const actual = lexer.parse(line);
    expect(actual.map(x => x.toString())).toEqual(['type:int', 'name:a', 'equal:=', 'number:5']);
});

it('parses negative integer', () => {
    const lexer = new Lexer();
    const line = '-52';
    const actual = lexer.parse(line);
    expect(actual.map(out => out.toString())).toEqual(['number:' + line]);
});

it('parses string without whitespaces', () => {
    const lexer = new Lexer();
    const line = '"JavaScript"';
    const actual = lexer.parse(line);
    expect(actual.map(out => out.toString())).toEqual(['string:' + line]);
});

it('parses string with whitespaces', () => {
    const lexer = new Lexer();
    const line = '"a lenin vseh poslal na pervomay"';
    const actual = lexer.parse(line);
    expect(actual.map(out => out.toString())).toEqual(['string:' + line]);
});

it('parses string with leading and ending whitespaces', () => {
    const lexer = new Lexer();
    const line = '"  likeawind   "';
    const actual = lexer.parse(line);
    expect(actual.map(out => out.toString())).toEqual(['string:' + line]);
});

it('fails reading token starting by a number', () => {
    const lexer = new Lexer();
    const line = '0asd';
    const throwing = () => {
        lexer.parse(line);
    }
    expect(throwing).toThrow(LexerError);
});