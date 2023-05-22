import { Tag } from "./tag.js";
import { Token } from "./token.js";

export class Logical extends Token {
  static or = new Logical("||");
  static eq = new Logical("===");
  static ne = new Logical("!==");
  static le = new Logical("<=");
  static g = new Logical(">");
  static l = new Logical("<");
  static ge = new Logical(">=");
  static and = new Logical("&&");
  t;
  constructor(k) {
    super(k);
    this.t = Tag.LOGICAL;
  }
}
