import { Tag } from "../tag";
import { Word } from "../word";
import { Statm } from "./statm";
import { Expr } from "./expr";

export class Ret extends Statm {
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
    return this.emit(
      this.w
        .filter((e) => e?.k !== "}" && e?.k !== ";")
        .map((e) => e?.k)
        .join(" ") + ";\n"
    );
  }
}
