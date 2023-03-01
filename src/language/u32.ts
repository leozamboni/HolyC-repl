import { Tag } from "../tag";
import { Type } from "../type";
import { Feat } from "./feat";

export class U32 extends Feat {
  constructor(c) {
    super(c);
  }
  static k = "U32";
  lex() {
    return new Type("U32", Tag.DTYPE);
  }
  parse(tk) {
    this.root(tk, Tag.DTYPE);
    this.edge(Tag.ID);
    this.edge("=");
    this.edge(Tag.NUM);
    this.edge(";");
  }
  eval() {
    return this.emit("let " + this.w[1].k + " = " + this.w[3].k + ";\n");
  }
}
