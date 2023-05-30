import { Compiler } from "../compiler";
import { SymtT } from "../symt";
import { Tag } from "../tag";
import { Call } from "./call";
import { Expr } from "./expr";
import { Stmt } from "./stmt";

export class Id extends Stmt {
  constructor(c) {
    super(c);
  }
  parse(tk) {
    this.root(tk, Tag.ID);
    if (this.c.charAHead(".")) {
      this.edge(".");
      this.edge(Tag.ID);
    }

    if (this.c.charAHead(";")) {
      this.edge(";");
    } else if (this.c.charAHead("(")) {
      this.edge("(");
      if (this.c.charAHead(")")) {
        this.edge(")");
      } else {
        this.edge(Tag.STR);
        this.edge(")");
      }
      this.edge(";");
    } else if (this.c.tokenAhead("=")) {
      this.edge("=");
      this.w.push(...new Expr(this.c).parse(this.c.lex()));
      this.edge(";");
    } else {
      this.w.push(...new Expr(this.c).parse(this.c.lex()));
      this.edge(";");
    }
  }
  eval() {
    if (Compiler.symt.check(SymtT.CLASS, this.w[0])) {
      const cName = Compiler.symt.get(SymtT.CLASS, this.w[0])?.k;
      return this.emit(
        "let " +
          this.w
            .slice(1, this.w.length - 1)
            .map((tk) => tk.k)
            .join("") +
          " = new " +
          cName +
          "();\n"
      );
    }
    if (this.w[1].k === ";") {
      return this.emit(this.w[0].k + "();\n");
    } else if (this.w[1].k === "(") {
      return this.emit(new Call(this).eval() + ");\n");
    }
    return this.emit(
      this.w
        .slice(
          0,
          this.w.findIndex((tk) => tk.k === "=")
        )
        .map((tk) => tk.k)
        .join("") +
        new Expr(this).eval() +
        ";\n"
    );
  }
}
