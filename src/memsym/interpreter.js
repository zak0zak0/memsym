import { Lexer } from '../memsym-lang/lexer';
import { Parser } from '../memsym-lang/parser';
import { DeclarationNode } from "../memsym-lang/nodes/declaration";
import { parseDataType } from '../common/utils';
import { DataType } from '../common/data-type';

export class Interpreter {
    #names = [];

    constructor(memsym, onUpdate) {
        this.memsym = memsym;
        this.onUpdate = onUpdate;
        this.lexer = new Lexer();
        this.parser = new Parser();
    }

    run(lines) {
        const nodes = [];
        this.#names = [];
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            try {
                const tokens = this.lexer.parse(line);
                if (!tokens?.length) {
                    continue;
                }
                const node = this.parser.parse(tokens);
                nodes.push(node);
            } catch (e) {
                throw new Error(`Error at line ${i + 1}:\n ${e}`);
            }
        }
        for (let i = 0; i < nodes.length; i++) {
            try {
                this.checkNode(nodes[i]);
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

    checkNode(node) {
        if (node.nodeName === DeclarationNode.nodeName) {
            const { type, name, value } = node;
            if (this.#names.find(x => x === name) || this.memsym.records.find(x => x.label === name)) {              
                throw new Error(`Name '${name}' is already declared`);
            }
            const parsedType = parseDataType(type);
            if (parsedType === DataType.INT && (+value < -128 || +value > 127)) {
                throw new Error(`Value ${value} is out of range [-128; 127]`);
            }
            this.#names.push(name);
        }
    }
}