import { Tag } from "../tag";
import { Word } from "../word";
import { Stmt } from "./stmt";

export class False extends Stmt {
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
