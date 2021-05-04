import { BaseNode } from "./base";

const nodeName = "DeclarationNode";

export class DeclarationNode extends BaseNode {    
    constructor(type, name, value) {
        super(nodeName);
        this.name = name;
        this.type = type;
        this.value = value;
    }
}

DeclarationNode.nodeName = nodeName;