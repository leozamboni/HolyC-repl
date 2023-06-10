import { Logical } from "../logical";
import { Stmt } from "./stmt";

export class Le extends Stmt {
  constructor(c) {
    super(c);
  }
  static k = "<";
  lex() {
    if (this.c.charAHead("=")) {
      this.c.read();
      return Logical.le;
    } else return Logical.l;
  }
  parse() {
    throw new Error("Method not implemented.");
  }
  eval() {
    throw new Error("Method not implemented.");
  }
}
