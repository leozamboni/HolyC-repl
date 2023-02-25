import { Tag } from "../tag";
import { Type } from "../type";
import { Feat } from "./feat";

export class I8 extends Feat {
  constructor(l?, p?, g?) {
    super(l, p, g);
  }
  static k = "I8";
  lex() {
    return new Type("I8", Tag.DTYPE);
  }
  parse() {
    throw new Error("Method not implemented.");
  }
  gen() {
    throw new Error("Method not implemented.");
  }
}
