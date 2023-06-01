import { Tag } from "../tag";
import { Utils } from "../utils";
import { Word } from "../word";
import { Id } from "./id";
import { Stmt } from "./stmt";
import { Str } from "./str";

export class Block extends Stmt {
  static curr_block_level = 0;
  constructor(c) {
    super(c);
  }
  parse(tk) {
    this.root(tk, "{");
    let t = this.c.lex();
    while (t.k !== "}") {
      let f = this.c.cases[t.k];
      if (f) {
        f = new f(this);
        f.parse(t);
      } else if ((t as Word).t === Tag.STR) {
        let f = this.c.cases['"'];
        if (f) {
          f = new f(this);
          f.parse(t);
        }
      } else {
        f = new Id(this);
        f.parse(t);
      }
      t = this.c.lex();
    }
    this.c.i--;
    this.edge("}");
    return this.w;
  }
  eval() {
    Block.curr_block_level++;
    let i = this.w.findIndex((w) => w.k === "{");
    let out = "";

    for (; ; i++) {
      if (!this.w[i] || this.w[i].k === "}") break;
      let f = this.c.cases[this.w[i].k];
      if (!f) {
        switch ((this.w[i] as Word)?.t) {
          case Tag.ID:
            f = Id;
            break;
          case Tag.STR:
            f = Str;
            break;
        }
      }

      if (f) {
        let end_c = ";";
        switch (this.w[i].k) {
          case "for":
          case "else":
          case "if":
            end_c = "}";
            break;
        }

        const w = Utils.get_line(i, this.w, end_c);
        f = new f({ ...this, w: w });
        out += Utils.block_fix();
        out += f.eval();
        i = i + w.length - 1;
      }
    }
    Block.curr_block_level--;
    return this.emit(out);
  }
}
