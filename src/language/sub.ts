import { Math } from "../math";
import { Ast } from "./ast";

export class Sub extends Ast {
  constructor(c) {
    super(c);
  }
  static k = "-";
  lex() {
    return Math.sub;
  }
  parse() {
    throw new Error("Method not implemented.");
  }
  eval() {
    this.emit("-");
  }
}
