import { Tag } from "../tag";
import { Type } from "../type";
import { Proc } from "./proc";
import { Expr } from "./expr";
import { Stmt } from "./stmt";

export class U0 extends Stmt {
  constructor(c) {
    super(c);
  }
  static k = "U0";
  lex() {
    return Type.u0;
  }
  parse(tk) {
    this.root(tk, Tag.DTYPE);
    this.edge(Tag.ID);
    if (this.c.k === "(") {
      this.w.push(...new Proc(this.c).parse(this.c.lex()));
    } else {
      this.edge("=");
      this.w.push(...new Expr(this.c).parse(this.c.lex()));
      this.edge(";");
    }
  }
  eval() {
    if (this.w[2].k === "(") {
      return new Proc(this).eval();
    } else {
      return this.emit("let " + this.w[1].k + new Expr(this).eval() + ";\n");
    }
  }
}
