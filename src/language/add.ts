import { Math } from "../math";
import { Ast } from "./ast";

export class Add extends Ast {
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
