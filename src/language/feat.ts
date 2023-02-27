import { Compiler } from "../compiler";
import { Tag } from "../tag";
import { Token } from "../token";
import { Type } from "../type";
import { Word } from "../word";

export abstract class Feat {
  c: Compiler;
  constructor(c) {
    this.c = c;
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
  }
  abstract lex(): Token | Word | Type;
  abstract parse();
  abstract eval();
}
