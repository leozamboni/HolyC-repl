import { Tag } from "../tag";
import { Word } from "../word";
import { Stmt } from "./stmt";

export class Define extends Stmt {
  constructor(c) {
    super(c);
  }
  static k = "#define";
  lex() {
    return new Word("#define", Tag.DEFINE);
  }
  parse(tk) {
    this.root(tk, Tag.DEFINE);
    this.edge(Tag.ID);
    this.edge([Tag.NUM, Tag.STR]);
  }
  eval() {
    return this.emit(
      "const " +
        this.w[1].k +
        " = " +
        this.w
          .slice(2, this.w.length)
          .map((tk) => tk.k)
          .join("") +
        ";\n"
    );
  }
}
