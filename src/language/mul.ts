import { Math } from "../math";
import { Stmt } from "./stmt";

export class Mul extends Stmt {
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
