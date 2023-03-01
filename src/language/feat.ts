import { Compiler } from "../compiler";
import { TokenType } from "../interface";
import { Tag } from "../tag";
import { Word } from "../word";

export abstract class Feat {
  c: Compiler;
  w: TokenType[];
  constructor(c) {
    this.c = c;
    this.w = [];
  }
  root(tk: Word, T: Tag | Tag[] | string) {
    if (tk.t !== T) {
      throw new Error("unexpected token " + tk.k + " in line " + this.c.l);
    }
    this.w.push(tk);
  }
  edge(T: Tag | Tag[] | string) {
    const tk = this.c.lex();
    let val = tk.t;
    if (!val) {
      val = tk.k;
    }
    if (Array.isArray(T)) {
      if (!T.includes(val))
        throw new Error("unexpected token " + tk.k + " in line " + this.c.l);
    } else {
      if (val !== T)
        throw new Error("unexpected token " + tk.k + " in line " + this.c.l);
    }
    this.w.push(tk);
  }
  emit(str) {
    return str;
  }
  abstract lex(): TokenType;
  abstract parse(t: TokenType);
  abstract eval();
}
