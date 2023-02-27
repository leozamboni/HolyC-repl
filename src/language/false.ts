import { Tag } from "../tag";
import { Word } from "../word";
import { Feat } from "./feat";

export class False extends Feat {
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
