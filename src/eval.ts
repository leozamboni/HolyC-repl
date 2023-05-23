import { Stmt } from "./language/stmt";
import { Parser } from "./parser";

export class Eval extends Parser {
  constructor() {
    super();
  }
  eval(t: Stmt) {
    if (t?.eval) return t.eval();
  }
}
