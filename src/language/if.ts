import { Tag } from "../tag";
import { Word } from "../word";
import { Ast } from "./ast";
import { Block } from "./block";
import { Cond } from "./cond";
import { Expr } from "./expr";

export class If extends Ast {
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
  }
  eval() {
    let i = 2;
    let str = "if";
  }
}
