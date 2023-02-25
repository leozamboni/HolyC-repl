import { Tag } from "../tag";
import { Type } from "../type";
import { Feat } from "./feat";

export class I0 extends Feat {
  constructor(l?, p?, g?) {
    super(l, p, g);
  }
  static k = "I0";
  lex() {
    return new Type("I0", Tag.DTYPE);
  }
  parse() {
    throw new Error("Method not implemented.");
  }
  gen() {
    throw new Error("Method not implemented.");
  }
}
