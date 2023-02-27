import { Lexer } from "./lexer";
import { Token } from "./token";
import { Type } from "./type";
import { Word } from "./word";

export class Parser extends Lexer {
  constructor() {
    super();
  }
  parse(t: Token | Word | Type) {
    const f = this.cases[t.k];
    if (f) return new f(this).parse();
  }
}
