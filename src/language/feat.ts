import { Compiler } from "../compiler";
import { TokenType } from "../interface";
import { Tag } from "../tag";
import { Word } from "../word";

export interface Feat {
  lex?(): TokenType | void;
  parse?(t: TokenType): void;
  eval?(): string | void;
}

export abstract class Feat {
  c: Compiler;
  w: TokenType[];
  constructor(arg) {
    const intern = arg?.c;
    if (intern) {
      this.c = arg.c;
      this.w = arg.w;
    } else {
      this.c = arg;
      this.w = [];
    }
  }
  root(tk: Word, T: Tag | Tag[] | string) {
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
}
