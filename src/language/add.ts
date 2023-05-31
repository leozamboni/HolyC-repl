import { Math } from "../math";
import { Stmt } from "./stmt";

export class Add extends Stmt {
  constructor(c) {
    super(c);
  }
  static k = "+";
  lex() {
    if (this.c.charAHead("+")) {
      this.c.i++;
      return Math.pp;
    } else return Math.add;
  }
}
