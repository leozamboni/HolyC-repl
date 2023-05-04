import { Tag } from "../tag";
import { Call } from "./call";
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
      } else if (this.c.checkAhead("(")) {
        this.w.push(...new Call(this.c).parse(this.c.lex()));
      } else {
        this.edge(Tag.MATH);
        tk = this.c.lex();
      }
    }
    return this.w;
  }
  eval() {
    throw new Error("Method not implemented.");
  }
}
