import { Math } from "../math";
import { Feat } from "./feat";

export class Add extends Feat {
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
