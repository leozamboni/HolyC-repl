import { Tag } from "../tag";
import { Token } from "../token";
import { Word } from "../word";
import { Feat } from "./feat";

export class And extends Feat {
  constructor(l?, p?, g?) {
    super(l, p, g);
  }
  static k = "&";
  lex() {
    if (this.l.checkAhead("&")) return new Word("&&", Tag.AND);
    else return new Token("&");
  }
  parse() {
    throw new Error("Method not implemented.");
  }
  gen() {
    throw new Error("Method not implemented.");
  }
}
