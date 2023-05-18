import { Type } from "../type";
import { U0 } from "./u0";

export class F64 extends U0 {
  constructor(c) {
    super(c);
  }
  static k = "F64";
  lex() {
    return Type.f64;
  }
}
