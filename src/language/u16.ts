import { Tag } from "../tag";
import { Type } from "../type";
import { Feat } from "./feat";

export class U16 extends Feat {
  constructor(l?, p?, g?) {
    super(l, p, g);
  }
  static k = "U16";
  lex() {
    return new Type("U16", Tag.DTYPE);
  }
  parse() {
    throw new Error("Method not implemented.");
  }
  gen() {
    throw new Error("Method not implemented.");
  }
}
