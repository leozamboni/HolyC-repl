import { Math } from "../math";
import { Statm } from "./statm";

export class Add extends Statm {
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
