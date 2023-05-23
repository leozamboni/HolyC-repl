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
    while (this.c.tokenAhead("else")) {
      this.edge(Tag.ELSE);
      if (this.c.tokenAhead("if")) {
        this.edge(Tag.IF);
        this.edge("(");
        this.w.push(...new Cond(this.c).parse(this.c.lex()));
        this.edge(")");
      }
      this.w.push(...new Block(this.c).parse(this.c.lex()));
    }
  }
  eval() {
    let i = 2;
    let str = "if (";
    // eslint-disable-next-line no-constant-condition
    while (true) {
      str += this.w[i].k;
      if (this.w[i].k === ")") break;
      i++;
    }
    i++;
    if (this.w[i].k === "else") {
      while (true) {
        str += this.w[i].k;
        if (this.w[i].k === ")") break;
        i++;
      }
    }

    console.log(str);
    str += " {\n" + new Block(this).eval() + " }";
    console.log(str);
    return this.emit(str);
  }
}
