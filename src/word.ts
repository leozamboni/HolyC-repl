import { Tag } from "./tag.enum";
import { Token } from "./token.js";

export class Word extends Token {
  static and = new Word("&&", Tag.AND);
  static or = new Word("||", Tag.OR);
  static eq = new Word("==", Tag.EQ);
  static ne = new Word("!=", Tag.NE);
  static le = new Word("<=", Tag.LE);
  static ge = new Word(">=", Tag.GE);
  static true = new Word("TRUE", Tag.TRUE);
  static false = new Word("FALSE", Tag.FALSE);
  t;
  constructor(k, t) {
    super(k);
    this.t = t;
  }
}
