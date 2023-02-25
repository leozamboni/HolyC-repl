import { Tag } from "../tag";
import { Token } from "../token";
import { Word } from "../word";
import { Feat } from "./feat";

export class Or extends Feat {
  constructor(l?, p?, g?) {
    super(l, p, g);
  }
  static k = "|";
  lex() {
    if (this.l.checkAhead("|")) return new Word("||", Tag.OR);
    else return new Token("|");
  }
  parse() {
    throw new Error("Method not implemented.");
  }
  gen() {
    throw new Error("Method not implemented.");
  }
}
