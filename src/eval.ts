import { Feat } from "./language/statm";
import { Parser } from "./parser";

export class Eval extends Parser {
  constructor() {
    super();
  }
  eval(t: Feat) {
    if (t?.eval) return t.eval();
  }
}
