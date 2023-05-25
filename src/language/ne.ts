import { Logical } from "../logical";
import { Token } from "../token";
import { Stmt } from "./stmt";

export class Ne extends Stmt {
  constructor(c) {
    super(c);
  }
  static k = "!";
  lex() {
    if (this.c.charAHead("=")) return Logical.ne;
    else return new Token("!");
  }
}
