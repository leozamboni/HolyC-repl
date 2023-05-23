import { Tag } from "../tag";
import { Word } from "../word";
import { Stmt } from "./stmt";

export class Else extends Stmt {
  constructor(c) {
    super(c);
  }
  static k = "else";
  lex() {
    return new Word("else", Tag.ELSE);
  }
}
