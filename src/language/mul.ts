import { Math } from "../math";
import { Statm } from "./statm";

export class Mul extends Statm {
  constructor(c) {
    super(c);
  }
  static k = "*";
  lex() {
    return Math.mul;
  }
  parse() {
    throw new Error("Method not implemented.");
  }
  eval() {
    throw new Error("Method not implemented.");
  }
}
