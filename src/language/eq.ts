import { Logical } from "../logical";
import { Token } from "../token";
import { Ast } from "./ast";

export class Eq extends Ast {
  constructor(c) {
    super(c);
  }
  static k = "=";
  lex() {
    if (this.c.checkAhead("=")) return Logical.eq;
    else return new Token("=");
  }
  parse() {
    throw new Error("Method not implemented.");
  }
  eval() {
    this.emit("=");
  }
}
