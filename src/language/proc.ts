import { Tag } from "../tag";
import { Type } from "../type";
import { Block } from "./block";
import { Stmt } from "./stmt";

export class Proc extends Stmt {
  constructor(c) {
    super(c);
  }
  parse(tk) {
    this.root(tk, "(");
    if (this.c.charAHead(")")) {
      this.edge(")");
    } else {
      // eslint-disable-next-line no-constant-condition
      while (true) {
        this.edge(Tag.DTYPE);
        this.edge(Tag.ID);
        if (this.c.charAHead("=")) {
          this.edge("=");
          this.edge(Tag.NUM);
        }
        if (this.c.charAHead(",")) {
          this.edge(",");
        } else {
          this.edge(")");
          break;
        }
      }
    }
    this.w.push(...new Block(this.c).parse(this.c.lex()));
    return this.w;
  }
  eval() {
    let params = "";
    if (this.w[2].k === "(") {
      for (let i = 3; ; i++) {
        if (this.w[i].k === ")") break;
        if ((this.w[i] as Type)?.t !== Tag.DTYPE) {
          params += this.w[i].k;
        }
      }
    }
    return this.emit(
      "function " +
        this.w[1].k +
        "(" +
        params +
        ") {\n" +
        new Block(this).eval() +
        "}\n"
    );
  }
}
