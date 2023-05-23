import { Math } from "../math";
import { Statm } from "./statm";

export class Sub extends Statm {
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
