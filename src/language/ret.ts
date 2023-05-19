import { Tag } from "../tag";
import { Word } from "../word";
import { Expr } from "./expr";
import { Feat } from "./feat";

export class Ret extends Feat {
  constructor(c) {
    super(c);
  }
  static k = "return";
  lex() {
    return new Word("return", Tag.RET);
  }
  parse(tk) {
    this.root(tk, Tag.RET);
    if (this.c.checkAhead(";")) {
      this.edge(";");
    } else {
      this.w.push(...new Expr(this.c).parse(this.c.lex()));
      this.edge(";");
    }
  }
  eval() {
    this.emit(this.w.filter((e) => e?.k !== "}").join(" "));
  }
}
