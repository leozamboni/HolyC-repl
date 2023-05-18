import { Type } from "../type";
import { U0 } from "./u0";

export class I16 extends U0 {
  constructor(c) {
    super(c);
  }
  static k = "I16";
  lex() {
    return Type.i16;
  }
}
