import { Tag } from "../tag";
import { Word } from "../word";
import { Feat } from "./feat";

export class True extends Feat {
  constructor(l?, p?, g?) {
    super(l, p, g);
  }
  static k = "TRUE";
  lex() {
    return new Word("TRUE", Tag.TRUE);
  }
  parse() {
    throw new Error("Method not implemented.");
  }
  gen() {
    throw new Error("Method not implemented.");
  }
}
