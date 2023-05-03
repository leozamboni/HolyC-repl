import { Tag } from "../tag";
import { Block } from "./block";
import { Feat } from "./feat";

export class Expr extends Feat {
  constructor(c) {
    super(c);
  }
  parse(tk) {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      this.root(tk, [Tag.ID, Tag.NUM]);
      if (this.c.checkAhead(";")) {
        this.edge(";");
        break;
      }
      this.edge(Tag.MATH);
      tk = this.c.lex();
    }
    return this.w;
  }
  eval() {
    throw new Error("Method not implemented.");
  }
}
