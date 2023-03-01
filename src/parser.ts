import { Lexer } from "./lexer";
import { Token } from "./token";
import { Type } from "./type";
import { Word } from "./word";

export class Parser extends Lexer {
  constructor() {
    super();
  }
  parse(t: Token | Word | Type) {
    let f = this.cases[t.k];
    if (f) {
      f = new f(this);
      f.parse();
      return f;
    }
  }
}
