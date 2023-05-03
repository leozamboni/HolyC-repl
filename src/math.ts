import { Tag } from "./tag.js";
import { Token } from "./token.js";

export class Math extends Token {
  static add = new Math("+");
  static sub = new Math("-");
  static div = new Math("/");
  static mul = new Math("*");
  t;
  constructor(k) {
    super(k);
    this.t = Tag.MATH;
  }
}
