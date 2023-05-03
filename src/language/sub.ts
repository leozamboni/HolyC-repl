import { Math } from "../math";
import { Feat } from "./feat";

export class Sub extends Feat {
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
    throw new Error("Method not implemented.");
  }
}
