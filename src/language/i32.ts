import { Tag } from "../tag";
import { Type } from "../type";
import { Feat } from "./feat";

export class I32 extends Feat {
  constructor(l?, p?, g?) {
    super(l, p, g);
  }
  static k = "I32";
  lex() {
    return new Type("I32", Tag.DTYPE);
  }
  parse() {
    throw new Error("Method not implemented.");
  }
  gen() {
    throw new Error("Method not implemented.");
  }
}
