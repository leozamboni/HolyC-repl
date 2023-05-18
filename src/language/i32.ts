import { Type } from "../type";
import { U0 } from "./u0";

export class I32 extends U0 {
  constructor(c) {
    super(c);
  }
  static k = "I32";
  lex() {
    return Type.i32;
  }
}
