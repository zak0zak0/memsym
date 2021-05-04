import { Lexer } from '../memsym-lang/lexer';
import { Parser } from '../memsym-lang/parser';
import { DeclarationNode } from "../memsym-lang/nodes/declaration";
import { parseDataType } from '../common/utils';

export class Interpreter {   
    constructor(memsym, onUpdate) {
        this.memsym = memsym;
        this.onUpdate = onUpdate;
        this.lexer = new Lexer();
        this.parser = new Parser();
    }

    run(lines) {
        const nodes = [];
        for (let i = 0; i < lines.length; i++) { 
            const line = lines[i];
            try {
                const tokens = this.lexer.parse(line);
                const node = this.parser.parse(tokens);
                nodes.push(node);                
            } catch (e) {
                throw new Error(`Error at line ${i + 1}:\n ${e}`);
            }
        }
        nodes.forEach(node => {
            this.handleNode(node);
        })
        this.onUpdate();
    }

    handleNode(node) {
        if (node.nodeName === DeclarationNode.nodeName) {
            const { type, name, value } = node;
            this.memsym.declare(parseDataType(type), name, value);
        }
    }
}