import { Tag } from "../tag";
import { Word } from "../word";
import { Statm } from "./statm";
import { Id } from "./id";

export class Block extends Statm {
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
    let i = this.w.findIndex((w) => w.k === "{");
    let code = "";
    while (this.w[i].k !== "}") {
      let f = this.c.cases[this.w[i].k];
      const w = this.w.slice(
        i,
        i + 1 + this.w.slice(i, this.w.length).findIndex((e) => e?.k === ";")
      );
      if (f) {
        f = new f({ ...this, w });
        code += "\t" + f.eval();
        i = i + w.length - 1;
      } else if ((this.w[i] as Word)?.t === Tag.STR) {
        let f = this.c.cases['"'];

        if (f) {
          f = new f({
            ...this,
            w,
          });
          code += "\t" + f.eval();
          i = i + w.length - 1;
        }
      } else if ((this.w[i] as Word)?.t === Tag.ID) {
        f = new Id({ ...this, w });
        code += "\t" + f.eval();
        i = i + w.length - 1;
      }
      i++;
    }
    return this.emit(code);
  }
}
