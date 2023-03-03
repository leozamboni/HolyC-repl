import { Tag } from "../tag";
import { Word } from "../word";
import { Feat } from "./feat";
import { Id } from "./id";

export class Block extends Feat {
  constructor(c) {
    super(c);
  }
  parse() {
    this.root(this.c.lex(), "{");
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
    let i = 3;
    let code = "";
    while (this.w[i].k !== "}") {
      let f = this.c.cases[this.w[i].k];
      if (f) {
        f = new f({ ...this, w: this.w.slice(i, this.w.length) });
        code += f.eval();
      } else if ((this.w[i] as Word)?.t === Tag.STR) {
        let f = this.c.cases['"'];
        if (f) {
          f = new f({ ...this, w: this.w.slice(i, this.w.length) });
          code += f.eval();
        }
      } else if ((this.w[i] as Word)?.t === Tag.ID) {
        f = new Id({ ...this, w: this.w.slice(i, this.w.length) });
        code += f.eval();
      }
      i++;
    }
    return code;
  }
}
