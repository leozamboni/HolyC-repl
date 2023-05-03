import { Tag } from "../tag";
import { Word } from "../word";
import { Feat } from "./feat";
import { Math } from "../math";
export class Comment extends Feat {
  constructor(c) {
    super(c);
  }
  static k = "/";
  lex() {
    if (this.c.checkAhead("/")) {
      let c = "/";
      this.c.read();
      do {
        c += this.c.k;
        this.c.read();
      } while ((this?.c.k as any) !== "\n");
      this.c.k = c + "\n";
      return new Word(this.c.k, Tag.COMMENT);
    } else return Math.div;
  }
  parse(tk) {
    this.root(tk, Tag.COMMENT);
  }
  eval() {
    return this.emit("// " + this.w[0].k);
  }
}
