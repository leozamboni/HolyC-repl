import { Tag } from "../tag";
import { Type } from "../type";
import { Feat } from "./feat";

export class I64 extends Feat {
  constructor(c) {
    super(c);
  }
  static k = "I64";
  lex() {
    return new Type("I64", Tag.DTYPE);
  }
  parse() {
    this.node(Tag.ID);
    this.node("=");
    this.node(Tag.NUM);
    this.node(";");
  }
  eval() {
    throw new Error("Method not implemented.");
  }
}
