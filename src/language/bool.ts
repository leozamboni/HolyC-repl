import { Tag } from "../tag";
import { Type } from "../type";
import { Feat } from "./feat";

export class Bool extends Feat {
  constructor(l?, p?, g?) {
    super(l, p, g);
  }
  static k = "Bool";
  lex() {
    return new Type("Bool", Tag.DTYPE);
  }
  parse() {
    throw new Error("Method not implemented.");
  }
  gen() {
    throw new Error("Method not implemented.");
  }
}
