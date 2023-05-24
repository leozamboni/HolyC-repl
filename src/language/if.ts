import { Tag } from "../tag";
import { Word } from "../word";
import { Block } from "./block";
import { Cond } from "./cond";
import { Stmt } from "./stmt";

export class If extends Stmt {
  constructor(c) {
    super(c);
  }
  static k = "if";
  lex() {
    return new Word("if", Tag.IF);
  }
  parse(tk) {
    this.root(tk, Tag.IF);
    this.edge("(");
    this.w.push(...new Cond(this.c).parse(this.c.lex()));
    this.edge(")");
    this.w.push(...new Block(this.c).parse(this.c.lex()));
    return this.w;
  }
  eval() {
    console.log(this.w);

    let i = 2;
    let str = "if (";
    // eslint-disable-next-line no-constant-condition
    while (true) {
      str += this.w[i].k;
      if (this.w[i].k === ")") break;
      i++;
    }
    i++;
    if (this.w[i].k === "{") {
      str += " {\n" + new Block(this).eval() + " }";
      const aux = this.w.slice(i, this.w.length).findIndex((e) => e?.k === "}");
      i += aux + 1;
    }
    return this.emit(str);
  }
}
