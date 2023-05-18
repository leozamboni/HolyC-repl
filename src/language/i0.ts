import { Tag } from "../tag";
import { Type } from "../type";
import { Feat } from "./feat";
import { Procedure } from "./procedure";
import { U0 } from "./u0";

export class I0 extends U0 {
  constructor(c) {
    super(c);
  }
  static k = "I0";
  lex() {
    return Type.i0;
  }
}
