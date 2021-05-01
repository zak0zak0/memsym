import { DataType } from "./data-type";
import { nameRegexString } from './constants';

const dataTypes = Object.entries(DataType).filter(([,v]) => v !== DataType.NULL).map(([k,v]) => k).join('|');
const declareRegex = new RegExp(`^\\s*(${dataTypes})\\s+${nameRegexString}\\s(.*)$`, "i");

export class Interpreter {    

    constructor(memsym, onUpdate) {
        this.memsym = memsym;
        this.onUpdate = onUpdate;
    }

    run(lines) {
        for (let i = 0; i < lines.length; i++) { 
            const line = lines[i];
            if (line.match(declareRegex)){
                this.declare(line);
            }
        }
        this.onUpdate();
    }

    validate(lines) {
        for (let i = 0; i < lines.length; i++) {
            if (!lines[i].match(declareRegex)) {
                return `Error at line ${i+1}!`;
            }
        }
    }

    declare(line) {
        let i = this.skipSpaces(line, 0);
        let typeName, varName, value;
        [i, typeName] = this.readToken(line, i);
        i = this.skipSpaces(line, i);
        [i, varName] = this.readToken(line, i);
        i = this.skipSpaces(line, i);
        [i, value] = this.readValue(line, i);
        
        const dataTypeKey = Object.keys(DataType).find(x => x.toLowerCase() === typeName.toLowerCase());
        this.memsym.declare(DataType[dataTypeKey], varName, value);
    }

    readToken(line, index) {
        let i = index;
        let token = '';
        while(i < line.length && !line[i].match(/\s/)) {
            token += line[i];
            i++;
        }
        return [i, token];
    }

    readValue(line, index) {
        let i = index;
        let token = '';
        while(i < line.length) {
            token += line[i];
            i++;
        }
        return [i, token];
    }

    skipSpaces(line, index) {
        let i = index;
        while(i < line.length && line[i].match(/\s/)) {
            i++;
        }
        return i;
    }
}