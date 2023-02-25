import { Tag } from "../tag";
import { Word } from "../word";
import { Feat } from "./feat";

export class False extends Feat {
  constructor(l?, p?, g?) {
    super(l, p, g);
  }
  static k = "FALSE";
  lex() {
    return new Word("FALSE", Tag.FALSE);
  }
  parse() {
    throw new Error("Method not implemented.");
  }
  gen() {
    throw new Error("Method not implemented.");
  }
}
