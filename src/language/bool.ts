import { Tag } from "../tag";
import { Type } from "../type";
import { Feat } from "./feat";

export class Bool extends Feat {
  constructor(c) {
    super(c);
  }
  static k = "Bool";
  lex() {
    return new Type("Bool", Tag.DTYPE);
  }
  parse() {
    this.node(Tag.ID);
    this.node("=");
    this.node([Tag.FALSE, Tag.TRUE]);
    this.node(";");
  }
  eval() {
    const id = this.w[0].k;
    let value = this.w[2];
    switch (value.t) {
      case Tag.FALSE:
        value = "false";
        break;
      case Tag.TRUE:
        value = "true";
        break;
    }
    this.emit("let " + id + ": Boolean = " + value + ";");
  }
}
