import { Tag } from "../tag";
import { Word } from "../word";
import { Expr } from "./expr";
import { Stmt } from "./stmt";

export class Ret extends Stmt {
  constructor(c) {
    super(c);
  }
  static k = "return";
  lex() {
    return new Word("return", Tag.RET);
  }
  parse(tk) {
    this.root(tk, Tag.RET);
    if (this.c.charAHead(";")) {
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
