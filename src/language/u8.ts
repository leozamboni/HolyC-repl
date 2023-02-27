import { Tag } from "../tag";
import { Type } from "../type";
import { Feat } from "./feat";

export class U8 extends Feat {
  constructor(c) {
    super(c);
  }
  static k = "U8";
  lex() {
    return new Type("U8", Tag.DTYPE);
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
