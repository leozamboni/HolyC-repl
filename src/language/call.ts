import { Tag } from "../tag";
import { Stmt } from "./stmt";

export class Call extends Stmt {
  constructor(c) {
    super(c);
  }
  parse(tk) {
    if (this.c.charAHead(";")) {
      this.root(tk, ";");
    } else {
      this.root(tk, "(");
      // eslint-disable-next-line no-constant-condition
      while (true) {
        if (this.c.charAHead(")")) {
          this.edge(")");
          break;
        }
        if (this.c.charAHead(",")) {
          this.edge(",");
          if (!this.c.charAHead(",")) {
            this.edge([Tag.ID, Tag.NUM]);
          }
        } else {
          this.edge([Tag.ID, Tag.NUM]);
        }
      }
    }
    return this.w;
  }
  eval() {
    let i = 0;
    let str = "";
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const tk = this.w[i] as any;
      if (tk.k === ")") break;
      if (
        tk.k === "," &&
        (this.w[i - 1] as any)?.t !== Tag.ID &&
        (this.w[i - 1] as any)?.t !== Tag.NUM
      ) {
        str += "undefined";
      }
      str += tk.k;
      i++;
    }
    return this.emit(str);
  }
}
