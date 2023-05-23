import { Logical } from "../logical";
import { Token } from "../token";
import { Stmt } from "./stmt";

export class And extends Stmt {
  constructor(c) {
    super(c);
  }
  static k = "&";
  lex() {
    if (this.c.charAHead("&")) return Logical.and;
    else return new Token("&");
  }
  parse() {
    throw new Error("Method not implemented.");
  }
  eval() {
    throw new Error("Method not implemented.");
  }
}
