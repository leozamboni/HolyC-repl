import { Math } from "../math";
import { Stmt } from "./stmt";

export class Div extends Stmt {
  constructor(c) {
    super(c);
  }
  static k = "/";
  lex() {
    return Math.div;
  }
}
