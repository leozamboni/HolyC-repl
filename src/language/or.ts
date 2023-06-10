import { Logical } from "../logical";
import { Token } from "../token";
import { Stmt } from "./stmt";

export class Or extends Stmt {
  constructor(c) {
    super(c);
  }
  static k = "|";
  lex() {
    if (this.c.charAHead("|")) {
      this.c.read();
      return Logical.or;
    } else return new Token("|");
  }
  parse() {
    throw new Error("Method not implemented.");
  }
  eval() {
    throw new Error("Method not implemented.");
  }
}
