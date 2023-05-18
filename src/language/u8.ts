import { Type } from "../type";
import { U0 } from "./u0";

export class U8 extends U0 {
  constructor(c) {
    super(c);
  }
  static k = "U8";
  lex() {
    return Type.u8;
  }
}
