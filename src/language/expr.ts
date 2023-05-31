import { Tag } from "../tag";
import { Call } from "./call";
import { Stmt } from "./stmt";

export class Expr extends Stmt {
  constructor(c) {
    super(c);
  }
  parse(tk) {
    if (tk.k === "++" || tk.k === "--") {
      this.edge(Tag.MATH);
    }
    this.root(tk, [Tag.ID, Tag.NUM, Tag.TRUE, Tag.FALSE]);
    if (this.c.charAHead(".")) {
      this.edge(".");
      this.edge(Tag.ID);
    }
    if (this.c.tokenAhead("++")) {
      this.edge(Tag.MATH);
    }
    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (
        this.c.charAHead(";") ||
        this.c.charAHead(",") ||
        this.c.tokenAhead(")")
      ) {
        break;
      } else if (this.c.charAHead("(")) {
        this.w.push(...new Call(this.c).parse(this.c.lex()));
      } else {
        this.edge([Tag.MATH, Tag.LOGICAL]);
        this.edge([Tag.ID, Tag.NUM, Tag.TRUE, Tag.FALSE]);
        if (this.c.charAHead(".")) {
          this.edge(".");
          this.edge(Tag.ID);
        }
      }
    }

    return this.w;
  }
  eval() {
    let str = "=";
    let i = this.w.findIndex((w) => w.k === "=") + 1;
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const tk = this.w[i] as any;
      if (tk.k === ";") break;
      if (tk.k === "(") {
        const endCallI = this.w
          .slice(i, this.w.length)
          .findIndex((e) => e?.k === ")");
        const w = this.w.slice(i, i + 1 + endCallI);
        str += new Call({ ...this, w }).eval();
        str += ")";
        i = i + endCallI;
      } else {
        str += tk.k;
      }
      i++;
    }
    return this.emit(str);
  }
}
