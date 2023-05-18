import { Type } from "../type";
import { U0 } from "./u0";

export class I8 extends U0 {
  constructor(c) {
    super(c);
  }
  static k = "I8";
  lex() {
    return Type.i8;
  }
}
