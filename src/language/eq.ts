import { Tag } from "../tag";
import { Token } from "../token";
import { Word } from "../word";
import { Ast } from "./ast";

export class Eq extends Ast {
  constructor(c) {
    super(c);
  }
  static k = "=";
  lex() {
    if (this.c.checkAhead("=")) return new Word("==", Tag.EQ);
    else return new Token("=");
  }
  parse() {
    throw new Error("Method not implemented.");
  }
  eval() {
    this.emit("=");
  }
}
