import { Tag } from "../tag";
import { Feat } from "./feat";

export class Call extends Feat {
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
    throw new Error("Method not implemented.");
  }
}
