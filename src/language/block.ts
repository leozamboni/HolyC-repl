import { Tag } from "../tag";
import { Utils } from "../utils";
import { Word } from "../word";
import { Id } from "./id";
import { Stmt } from "./stmt";

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
    let code = "";
    while (this.w[i] && this.w[i].k !== "}") {
      let f = this.c.cases[this.w[i].k];
      if (f) {
        const endI =
          this.w.slice(i, this.w.length).findIndex((e) => e?.k === "}") + 1;
        const w = this.w.slice(i, i + endI);
        f = new f({ ...this, w });
        code += Utils.block_fix();
        code += f.eval();
        i = i + w.length - 1;
      } else if ((this.w[i] as Word)?.t === Tag.STR) {
        const endI =
          this.w.slice(i, this.w.length).findIndex((e) => e?.k === ";") + 1;
        const w = this.w.slice(i, i + endI);

        let f = this.c.cases['"'];
        if (f) {
          f = new f({
            ...this,
            w,
          });
          code += Utils.block_fix();
          code += f.eval();
          i = i + w.length - 1;
        }
      } else if ((this.w[i] as Word)?.t === Tag.ID) {
        const endI =
          this.w.slice(i, this.w.length).findIndex((e) => e?.k === ";") + 1;
        const w = this.w.slice(i, i + endI);

        f = new Id({ ...this, w });
        code += Utils.block_fix();
        code += f.eval();
        i = i + w.length - 1;
      }
      i++;
    }
    Block.curr_block_level--;
    return this.emit(code);
  }
}
