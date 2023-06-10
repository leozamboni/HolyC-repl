import { Tag } from "../tag";
import { Utils } from "../utils";
import { Word } from "../word";
import { Block } from "./block";
import { Expr } from "./expr";
import { Stmt } from "./stmt";

export class For extends Stmt {
  constructor(c) {
    super(c);
  }
  static k = "for";
  lex() {
    return new Word("for", Tag.FOR);
  }
  parse(tk) {
    this.root(tk, Tag.FOR);
    this.edge("(");
    this.edge(Tag.ID);
    if (this.c.checkNext("=")) {
      this.edge("=");
      this.w.push(...new Expr(this.c).parse(this.c.lex()));
      this.edge(";");
    } else {
      this.edge(";");
    }
    this.w.push(...new Expr(this.c).parse(this.c.lex()));
    this.edge(";");
    this.w.push(...new Expr(this.c).parse(this.c.lex()));
    this.edge(")");
    this.w.push(...new Block(this.c).parse(this.c.lex()));
    return this.w;
  }
  eval() {
    let out = "for (";
    let i = 2;
    for (; this.w[i].k !== ")"; i++) {
      out += this.w[i].k;
    }
    out += ") {\n" + new Block(this).eval();
    out += Utils.block_fix();
    out += "}\n";
    return this.emit(out);
  }
}
