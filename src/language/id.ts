import { Tag } from "../tag";
import { Feat } from "./feat";

export class Id extends Feat {
  constructor(c) {
    super(c);
  }
  parse(tk) {
    this.root(tk, Tag.ID);
    if (this.c.checkAhead("(")) {
      this.edge("(");
      if (this.c.checkAhead(")")) {
        this.edge(")");
      } else {
        this.edge(Tag.STR);
        this.edge(")");
      }
    }
    this.edge(";");
  }
  eval() {
    console.log(this.w);

    return this.emit(this.w[0].k + "();\n");
  }
}
