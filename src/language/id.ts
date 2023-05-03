import { Tag } from "../tag";
import { Expr } from "./expr";
import { Feat } from "./feat";

export class Id extends Feat {
  constructor(c) {
    super(c);
  }
  parse(tk) {
    this.root(tk, Tag.ID);
    if (this.c.checkAhead(";")) {
      this.edge(";");
    } else if (this.c.checkAhead("(")) {
      this.edge("(");
      if (this.c.checkAhead(")")) {
        this.edge(")");
      } else {
        this.edge(Tag.STR);
        this.edge(")");
      }
      this.edge(";");
    } else {
      this.edge("=");
      this.w.push(...new Expr(this.c).parse(this.c.lex()));
    }
  }
  eval() {
    return this.emit(this.w[0].k + "();\n");
  }
}
