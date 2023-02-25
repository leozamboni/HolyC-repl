import { Scanner } from "./scanner";
import { Word } from "./word";
import * as Language from "./language";
import { Token } from "./token";
import { Type } from "./type";

export class Lexer extends Scanner {
  constructor() {
    super();
    this.cases = Object.keys(Language).reduce(
      (a, v) => ({ ...a, [Language[v].k]: Language[v] }),
      {}
    );
  }
  cases;
  lex() {
    return this.scan(
      this.cases as {
        key: () => Word | Type | Token;
      }[]
    );
  }
}
