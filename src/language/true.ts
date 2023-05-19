import { Tag } from "../tag";
import { Word } from "../word";
import { Ast } from "./ast";

export class True extends Ast {
  constructor(c) {
    super(c);
  }
  static k = "TRUE";
  lex() {
    return new Word("TRUE", Tag.TRUE);
  }
  parse() {
    throw new Error("Method not implemented.");
  }
  eval() {
    throw new Error("Method not implemented.");
  }
}
