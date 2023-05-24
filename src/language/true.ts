import { Tag } from "../tag";
import { Word } from "../word";
import { Stmt } from "./stmt";

export class True extends Stmt {
  constructor(c) {
    super(c);
  }
  static k = "TRUE";
  lex() {
    return new Word("true", Tag.TRUE);
  }
  parse() {
    throw new Error("Method not implemented.");
  }
  eval() {
    throw new Error("Method not implemented.");
  }
}
