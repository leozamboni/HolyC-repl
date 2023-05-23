import { Scanner } from "./scanner";
import * as Language from "./language";
import { Stmt } from "./language/stmt";

export class Lexer extends Scanner {
  constructor() {
    super(
      Object.keys(Language).reduce(
        (a, v) => ({ ...a, [Language[v].k]: Language[v] }),
        {}
      ) as () => Stmt[]
    );
  }
  lex() {
    return this.scan();
  }
}
