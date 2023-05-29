import { Tag } from "../tag";
import { Utils } from "../utils";
import { Word } from "../word";
import { Block } from "./block";
import { If } from "./if";
import { Stmt } from "./stmt";

export class Else extends Stmt {
  constructor(c) {
    super(c);
  }
  static k = "else";
  lex() {
    return new Word("else", Tag.ELSE);
  }
  parse(tk) {
    this.root(tk, Tag.ELSE);
    if (!this.c.tokenAhead("if")) {
      this.w.push(...new Block(this.c).parse(this.c.lex()));
    }
    return this.w;
  }
  eval() {
    let str = "\n";
    str += Utils.block_fix();
    str = "else ";
    if (this.w.length > 1) {
      if (this.w[1].k === "if") {
        str += new If({ ...this, w: this.w.slice(1, this.w.length) }).eval();
      } else if (this.w[1].k === "{") {
        let i = 1;
        str += "{\n" + new Block(this).eval();
        str += Utils.block_fix();
        str += "}\n";
        const aux = this.w
          .slice(i, this.w.length)
          .findIndex((e) => e?.k === "}");
        i += aux + 1;
      }
    }
    return this.emit(str);
  }
}
