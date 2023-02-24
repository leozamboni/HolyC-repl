import { Tag } from "./tag.js";
import { Token } from "./token.js";

export class Num extends Token {
  t;
  constructor(k) {
    super(k);
    this.t = Tag.NUM;
  }
}
