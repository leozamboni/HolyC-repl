import { Logical } from "../logical";
import { Token } from "../token";
import { Ast } from "./ast";

export class Ge extends Ast {
  constructor(c) {
    super(c);
  }
  static k = ">";
  lex() {
    if (this.c.checkAhead("=")) return Logical.ge;
    else return Logical.g;
  }
  parse() {
    throw new Error("Method not implemented.");
  }
  eval() {
    throw new Error("Method not implemented.");
  }
}
