import { Tag } from "../tag";
import { Word } from "../word";
import { Ast } from "./ast";

export class False extends Ast {
  constructor(c) {
    super(c);
  }
  static k = "FALSE";
  lex() {
    return new Word("FALSE", Tag.FALSE);
  }
  parse() {
    throw new Error("Method not implemented.");
  }
  eval() {
    throw new Error("Method not implemented.");
  }
}
