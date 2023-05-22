import { Tag } from "../tag";
import { Type } from "../type";
import { Ast } from "./ast";

export class Bool extends Ast {
  constructor(c) {
    super(c);
  }
  static k = "Bool";
  lex() {
    return Type.bool;
  }
  parse(tk) {
    this.root(tk, Tag.DTYPE);
    this.edge(Tag.ID);
    this.edge("=");
    this.edge([Tag.FALSE, Tag.TRUE]);
    this.edge(";");
  }
  eval() {
    const id = this.w[1].k;
    let value;
    switch ((this.w[3] as any)?.t) {
      case Tag.FALSE:
        value = "false";
        break;
      case Tag.TRUE:
        value = "true";
        break;
    }
    return this.emit("let " + id + "=" + value + ";\n");
  }
}
