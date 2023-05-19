import { Tag } from "../tag";
import { Ast } from "./ast";

export class Call extends Ast {
  constructor(c) {
    super(c);
  }
  parse(tk) {
    if (this.c.checkAhead(";")) {
      this.root(tk, ";");
    } else {
      this.root(tk, "(");
      // eslint-disable-next-line no-constant-condition
      while (true) {
        if (this.c.checkAhead(")")) {
          this.edge(")");
          break;
        }
        if (this.c.checkAhead(",")) {
          this.edge(",");
          if (!this.c.checkAhead(",")) {
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
        str += "_";
      }
      str += tk.k;
      i++;
    }

    return this.emit(str);
  }
}
