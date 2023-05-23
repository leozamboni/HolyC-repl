import { Math } from "../math";
import { Stmt } from "./stmt";

export class Add extends Stmt {
  constructor(c) {
    super(c);
  }
  static k = "+";
  lex() {
    return Math.add;
  }
  parse() {
    throw new Error("Method not implemented.");
  }
  eval() {
    this.emit("+");
  }
}
