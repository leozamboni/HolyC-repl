import { Tag } from "../tag";
import { Type } from "../type";
import { Feat } from "./feat";
import { Proc } from "./proc";

export class U8 extends Feat {
  constructor(c) {
    super(c);
  }
  static k = "U8";
  lex() {
    return new Type("U8", Tag.DTYPE);
  }
  parse(tk) {
    this.root(tk, Tag.DTYPE);
    this.edge(Tag.ID);
    if (this.c.k === "(") {
      this.w.push(...new Proc(this.c).parse());
    } else {
      this.edge("=");
      this.edge(Tag.NUM);
      this.edge(";");
    }
  }
  eval() {
    if (this.w[2].k === "{") {
      return new Proc(this).eval();
    } else {
      return this.emit("let " + this.w[1].k + " = " + this.w[3].k + ";\n");
    }
  }
}
