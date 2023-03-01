import { Lexer } from "./lexer";
import { Tag } from "./tag";
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
    } else if ((t as Word).t === Tag.STR) {
      let f = this.cases['"'];
      if (f) {
        f = new f(this);
        f.parse(t);
        return f;
      }
    }
  }
}
