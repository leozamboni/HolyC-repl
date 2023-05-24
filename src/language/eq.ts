import { Logical } from "../logical";
import { Token } from "../token";
import { Stmt } from "./stmt";

export class Eq extends Stmt {
  constructor(c) {
    super(c);
  }
  static k = "=";
  lex() {
    if (this.c.charAHead("=")) {
      this.c.i++;
      return Logical.eq;
    } else return new Token("=");
  }
  parse() {
    throw new Error("Method not implemented.");
  }
  eval() {
    this.emit("=");
  }
}
