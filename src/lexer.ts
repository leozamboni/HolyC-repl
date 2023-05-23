import { Scanner } from "./scanner";
import * as Language from "./language";
import { Feat } from "./language/statm";

export class Lexer extends Scanner {
  cases: () => Feat[];
  constructor() {
    super();
    this.cases = Object.keys(Language).reduce(
      (a, v) => ({ ...a, [Language[v].k]: Language[v] }),
      {}
    ) as () => Feat[];
  }
  lex() {
    return this.scan(this.cases);
  }
}
