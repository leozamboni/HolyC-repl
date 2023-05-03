import { Math } from "../math";
import { Feat } from "./feat";

export class Div extends Feat {
  constructor(c) {
    super(c);
  }
  static k = "/";
  lex() {
    return Math.div;
  }
  parse() {
    throw new Error("Method not implemented.");
  }
  eval() {
    throw new Error("Method not implemented.");
  }
}
