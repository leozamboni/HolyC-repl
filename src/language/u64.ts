import { Type } from "../type";
import { U0 } from "./u0";

export class U64 extends U0 {
  constructor(c) {
    super(c);
  }
  static k = "U64";
  lex() {
    return Type.u64;
  }
}
