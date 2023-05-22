import { Tag } from "../tag";
import { Ast } from "./ast";
import { Call } from "./call";
import { Expr } from "./expr";

export class Id extends Ast {
  constructor(c) {
    super(c);
  }
  parse(tk) {
    this.root(tk, Tag.ID);
    if (this.c.checkAhead(";")) {
      this.edge(";");
    } else if (this.c.checkAhead("(")) {
      this.edge("(");
      if (this.c.checkAhead(")")) {
        this.edge(")");
      } else {
        this.edge(Tag.STR);
        this.edge(")");
      }
      this.edge(";");
    } else {
      this.edge("=");
      this.w.push(...new Expr(this.c).parse(this.c.lex()));
      this.edge(";");
    }
  }
  eval() {
    if (this.w[1].k === ";") {
      return this.emit(this.w[0].k + "();\n");
    } else if (this.w[1].k === "(") {
      return this.emit(new Call(this).eval() + ");\n");
    }
    return this.emit(this.w[0].k + new Expr(this).eval() + ";\n");
  }
}
