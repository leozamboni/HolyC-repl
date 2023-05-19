import { Tag } from "../tag";
import { Type } from "../type";
import { Call } from "./call";
import { Feat } from "./feat";
import { Procedure } from "./procedure";
import { Expr } from "./expr";

export class U0 extends Feat {
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
      this.w.push(...new Procedure(this.c).parse(this.c.lex()));
    } else {
      this.edge("=");
      this.w.push(...new Expr(this.c).parse(this.c.lex()));
      this.edge(";");
    }
  }
  eval() {
    if (this.w[2].k === "(") {
      return new Procedure(this).eval();
    } else {
      return this.emit(
        "let " + this.w[1].k + " = " + new Expr(this).eval() + ";\n"
      );
    }
  }
}
