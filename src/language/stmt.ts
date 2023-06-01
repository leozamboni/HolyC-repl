import { Compiler } from "../compiler";
import { dev } from "../holyc";
import { TokenType } from "../interface";
import { Tag } from "../tag";
import { Word } from "../word";

export interface Stmt {
  lex?(): TokenType | void;
  parse?(t: TokenType): void;
  eval?(): string | void;
}

export abstract class Stmt {
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
      if (!T.includes(val)) {
        if (dev) {
          throw new Error(
            "unexpected token " +
              tk.k +
              " in line " +
              this.c.l +
              " type " +
              tk?.t
          );
        } else {
          throw { id: 257, tk: tk, exp: T };
        }
      }
    } else {
      if (val !== T) {
        if (dev) {
          throw new Error(
            "unexpected token " +
              tk.k +
              " in line " +
              this.c.l +
              " type " +
              tk?.t
          );
        } else {
          throw { id: 257, tk: tk, exp: T };
        }
      }
    }
    this.w.push(tk);
  }
  edge(T: Tag | Tag[] | string): TokenType {
    const tk = this.c.lex();
    let val = tk.t;
    if (!val) {
      val = tk.k;
    }
    if (Array.isArray(T)) {
      if (!T.includes(val)) {
        if (dev) {
          throw new Error(
            "unexpected token " +
              tk.k +
              " in line " +
              this.c.l +
              " type " +
              tk?.t
          );
        } else {
          throw { id: 256, tk: tk, exp: T };
        }
      }
    } else {
      if (val !== T) {
        if (dev) {
          throw new Error(
            "unexpected token " +
              tk.k +
              " in line " +
              this.c.l +
              " type " +
              tk?.t
          );
        } else {
          throw { id: 256, tk: tk, exp: T };
        }
      }
    }
    this.w.push(tk);
    return tk;
  }
  emit(str) {
    return str;
  }
}
