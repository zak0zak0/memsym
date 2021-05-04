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
    expect(actual.map(out => out.toString())).toEqual(['string:JavaScript']);
});

it('parses string with whitespaces', () => {
    const lexer = new Lexer();
    const line = '"a lenin vseh poslal na pervomay"';
    const actual = lexer.parse(line);
    expect(actual.map(out => out.toString())).toEqual(['string:a lenin vseh poslal na pervomay']);
});

it('parses string with leading and ending whitespaces', () => {
    const lexer = new Lexer();
    const line = '"  likeawind   "';
    const actual = lexer.parse(line);
    expect(actual.map(out => out.toString())).toEqual(['string:  likeawind   ']);
});

it('fails reading token starting by a number', () => {
    const lexer = new Lexer();
    const line = '0asd';
    const throwing = () => {
        lexer.parse(line);
    }
    expect(throwing).toThrow(LexerError);
});

it('parses simple negative number declaration whitout optional spaces', () => {
    const lexer = new Lexer();
    const line = 'int a=-5';
    const actual = lexer.parse(line);
    expect(actual.map(x => x.toString())).toEqual(['type:int', 'name:a', 'equal:=', 'number:-5']);
});

it('parses simple char declaration', () => {
    const lexer = new Lexer();
    const line = "char a = 'b'";
    const actual = lexer.parse(line);
    expect(actual.map(x => x.toString())).toEqual(['type:char', 'name:a', 'equal:=', 'char:b']);
});

it('parses simple bool declaration', () => {
    const lexer = new Lexer();
    const line = "bool a = true";
    const actual = lexer.parse(line);
    expect(actual.map(x => x.toString())).toEqual(['type:bool', 'name:a', 'equal:=', 'bool:true']);
});

it('parses simple string declaration', () => {
    const lexer = new Lexer();
    const line = 'string a = "string value"';
    const actual = lexer.parse(line);
    expect(actual.map(x => x.toString())).toEqual(['type:string', 'name:a', 'equal:=', 'string:string value']);
});