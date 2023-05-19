import { Math } from "../math";
import { Ast } from "./ast";

export class Mul extends Ast {
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
