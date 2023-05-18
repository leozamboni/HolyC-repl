import { Type } from "../type";
import { U0 } from "./u0";

export class U32 extends U0 {
  constructor(c) {
    super(c);
  }
  static k = "U32";
  lex() {
    return Type.u32;
  }
}
