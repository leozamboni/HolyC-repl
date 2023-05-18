import { Type } from "../type";
import { U0 } from "./u0";

export class I64 extends U0 {
  constructor(c) {
    super(c);
  }
  static k = "I64";
  lex() {
    return Type.i64;
  }
}
