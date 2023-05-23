import { Math } from "../math";
import { Statm } from "./statm";

export class Div extends Statm {
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
