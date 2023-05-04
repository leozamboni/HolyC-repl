import { Tag } from "../tag";
import { Type } from "../type";
import { Feat } from "./feat";
import { Procedure } from "./procedure";

export class I0 extends Feat {
  constructor(c) {
    super(c);
  }
  static k = "I0";
  lex() {
    return Type.i0;
  }
  parse(tk) {
    this.root(tk, Tag.DTYPE);
    this.edge(Tag.ID);
    if (this.c.k === "(") {
      this.w.push(...new Procedure(this.c).parse(this.c.lex()));
    } else {
      this.edge("=");
      this.edge(Tag.NUM);
      this.edge(";");
    }
  }
  eval() {
    if (this.w[2].k === "{") {
      return new Procedure(this).eval();
    } else {
      return this.emit("let " + this.w[1].k + " = " + this.w[3].k + ";\n");
    }
  }
}
