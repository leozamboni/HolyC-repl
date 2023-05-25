import { Math } from "../math";
import { Stmt } from "./stmt";

export class Sub extends Stmt {
  constructor(c) {
    super(c);
  }
  static k = "-";
  lex() {
    return Math.sub;
  }
}
