import { Tag } from "../tag";
import { Type } from "../type";
import { Proc } from "./proc";
import { Expr } from "./expr";
import { Stmt } from "./stmt";

export class U0 extends Stmt {
  constructor(c) {
    super(c);
  }
  static k = "U0";
  lex() {
    return Type.u0;
  }
  parse(tk) {
    this.root(tk, Tag.DTYPE);
    while (true) {
      this.edge(Tag.ID);
      if (this.c.charAHead("(")) {
        this.w.push(...new Proc(this.c).parse(this.c.lex()));
        break;
      } else if (this.c.charAHead(",")) {
        this.edge(",");
      } else if (this.c.charAHead(";")) {
        this.edge(";");
        break;
      } else {
        this.edge("=");
        this.w.push(...new Expr(this.c).parse(this.c.lex()));
        if (this.c.charAHead(",")) {
          this.edge(",");
        } else {
          this.edge(";");
          break;
        }
      }
    }
  }
  eval() {
    if (this.w[2].k === "(") {
      return new Proc(this).eval();
    } else {
      let out = "let ";
      let i = 1;
      while (true) {
        if (this.w[i].k === "=") {
          const expr = new Expr(this).eval();
          out += expr;
          i += expr.length;
          if (!this.w[i]) {
            out += "\n";
            break;
          }
          continue;
        }
        if (this.w[i].k === ";") {
          out += ";\n";
          break;
        }
        out += this.w[i].k;
        i++;
      }
      return this.emit(out);
    }
  }
}
