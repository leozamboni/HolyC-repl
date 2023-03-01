import { Compiler } from "../compiler";
import { TokenType } from "../interface";
import { Tag } from "../tag";

export abstract class Feat {
  c: Compiler;
  w: TokenType[];
  constructor(c) {
    this.c = c;
    this.w = [];
  }
  node(T: Tag | Tag[] | string) {
    const tk = this.c.lex();
    let val = tk.t;
    if (!val) {
      val = tk.k;
    }
    if (Array.isArray(T)) {
      if (!T.includes(val))
        throw new Error("unexpected token " + tk.k + " in line " + this.c.i);
    } else {
      if (val !== T)
        throw new Error("unexpected token  " + tk.k + " in line " + this.c.i);
    }
    this.w.push(tk);
  }
  emit(str) {
    console.log(str);
  }
  abstract lex(): TokenType;
  abstract parse();
  abstract eval();
}
