import { Math } from "../math";
import { Stmt } from "./stmt";

export class Div extends Stmt {
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
