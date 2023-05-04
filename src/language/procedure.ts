import { Tag } from "../tag";
import { Block } from "./block";
import { Feat } from "./feat";

export class Procedure extends Feat {
  constructor(c) {
    super(c);
  }
  parse(tk) {
    this.root(tk, "(");
    if (this.c.checkAhead(")")) {
      this.edge(")");
    } else {
      // eslint-disable-next-line no-constant-condition
      while (true) {
        this.edge(Tag.DTYPE);
        this.edge(Tag.ID);
        if (this.c.checkAhead("=")) {
          this.edge("=");
          this.edge(Tag.NUM);
        }
        if (this.c.checkAhead(",")) {
          this.edge(",");
        } else {
          this.edge(")");
          break;
        }
      }
    }
    return new Block(this.c).parse();
  }
  eval() {
    return (
      "function " + this.w[1].k + "() {\n" + new Block(this).eval() + "}\n"
    );
  }
}
