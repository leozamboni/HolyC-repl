import { Tag } from "./tag.js";
import { Token } from "./token.js";

export class Comment extends Token {
  t;
  constructor(k) {
    super(k);
    this.t = Tag.COMMENT;
  }
}
