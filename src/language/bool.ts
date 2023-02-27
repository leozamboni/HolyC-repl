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
    throw new Error("Method not implemented.");
  }
}
