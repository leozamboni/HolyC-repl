import { Tag } from "./tag.enum.js";
import { Token } from "./token.js";

export class Float extends Token {
  t;
  constructor(k) {
    super(k);
    this.t = Tag.FLOAT;
  }
}
