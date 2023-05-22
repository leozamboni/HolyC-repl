import { Logical } from "../logical";
import { Token } from "../token";
import { Ast } from "./ast";

export class Le extends Ast {
  constructor(c) {
    super(c);
  }
  static k = "<";
  lex() {
    if (this.c.checkAhead("=")) return Logical.le;
    else return Logical.l;
  }
  parse() {
    throw new Error("Method not implemented.");
  }
  eval() {
    throw new Error("Method not implemented.");
  }
}
