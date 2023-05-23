import { Math } from "../math";
import { Stmt } from "./stmt";

export class Sub extends Stmt {
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
