import { Logical } from "../logical";
import { Stmt } from "./stmt";

export class Ge extends Stmt {
  constructor(c) {
    super(c);
  }
  static k = ">";
  lex() {
    if (this.c.charAHead("=")) return Logical.ge;
    else return Logical.g;
  }
  parse() {
    throw new Error("Method not implemented.");
  }
  eval() {
    throw new Error("Method not implemented.");
  }
}
