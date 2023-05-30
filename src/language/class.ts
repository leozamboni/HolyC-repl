import { SymtT } from "../symt";
import { Tag } from "../tag";
import { Type } from "../type";
import { Word } from "../word";
import { Stmt } from "./stmt";

export class Class extends Stmt {
  constructor(c) {
    super(c);
  }
  static k = "class";
  lex() {
    return new Word("class", Tag.CLASS);
  }
  parse(tk) {
    this.root(tk, Tag.CLASS);
    this.c.symt.push(SymtT.CLASS, this.edge(Tag.ID));
    this.edge("{");
    while (true) {
      this.edge([Tag.DTYPE, Tag.ID]);
      this.edge(Tag.ID);
      if (this.c.charAHead(";")) {
        this.edge(";");
      } else if (this.c.charAHead("}")) {
        this.edge("}");
        break;
      } else {
        while (true) {
          this.edge(",");
          this.edge(Tag.ID);
          if (this.c.charAHead(";")) {
            this.edge(";");
            break;
          }
        }
      }
      if (this.c.tokenAhead("}")) {
        this.edge("}");
        break;
      }
    }
    this.c.symt.push(SymtT.CLASS, this.edge(Tag.ID));
    this.edge(";");
  }
  eval() {
    let str = "class " + this.w[1].k + " {\n";
    const cName = this.w[1]?.k;
    const vName = this.w[this.w.length - 2]?.k;
    let i = 3;
    while (true) {
      if (this.w[i].k === "}") break;
      if (this.w[i].k === ";") {
        str += ";\n";
      } else if (this.w[i].k === ",") {
        str += "; ";
      } else if ((this.w[i] as Type)?.t !== Tag.DTYPE) {
        if (!this.c.symt.check(SymtT.CLASS, this.w[i])) {
          str += this.w[i]?.k;
        }
      }
      i++;
    }
    str += "} let " + vName + " = " + cName + ";\n";
    return this.emit(str);
  }
}
