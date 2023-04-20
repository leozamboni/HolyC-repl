import { Id } from "./language/id";
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
      f.parse(t);
      return f;
    }
    f = this.cases[t.k[0]];
    if (f) {
      f = new f(this);
      f.parse(t);
      return f;
    }
    f = new Id(this);
    f.parse(t);
    return f;
  }
}
