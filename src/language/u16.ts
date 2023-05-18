import { Type } from "../type";
import { U0 } from "./u0";

export class U16 extends U0 {
  constructor(c) {
    super(c);
  }
  static k = "U16";
  lex() {
    return Type.u16;
  }
}
