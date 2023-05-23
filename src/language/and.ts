import { Logical } from "../logical";
import { Token } from "../token";
import { Statm } from "./statm";

export class And extends Statm {
  constructor(c) {
    super(c);
  }
  static k = "&";
  lex() {
    if (this.c.checkAhead("&")) return Logical.and;
    else return new Token("&");
  }
  parse() {
    throw new Error("Method not implemented.");
  }
  eval() {
    throw new Error("Method not implemented.");
  }
}
