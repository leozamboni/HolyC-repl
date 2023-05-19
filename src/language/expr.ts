import { Tag } from "../tag";
import { Call } from "./call";
import { Feat } from "./feat";

export class Expr extends Feat {
  constructor(c) {
    super(c);
  }
  parse(tk) {
    this.root(tk, [Tag.ID, Tag.NUM]);
    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (this.c.checkAhead(";")) {
        break;
      } else if (this.c.checkAhead("(")) {
        this.w.push(...new Call(this.c).parse(this.c.lex()));
      } else {
        this.edge(Tag.MATH);
        this.edge([Tag.ID, Tag.NUM]);
      }
    }

    return this.w;
  }
  eval() {
    let i = this.w.findIndex((w) => w.k === "=") + 1;
    let str = "";
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const tk = this.w[i] as any;
      if (tk.k === ";") break;
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
