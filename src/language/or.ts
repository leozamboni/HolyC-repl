import { Logical } from "../logical";
import { Token } from "../token";
import { Statm } from "./statm";

export class Or extends Statm {
  constructor(c) {
    super(c);
  }
  static k = "|";
  lex() {
    if (this.c.checkAhead("|")) return Logical.or;
    else return new Token("|");
  }
  parse() {
    throw new Error("Method not implemented.");
  }
  eval() {
    throw new Error("Method not implemented.");
  }
}
