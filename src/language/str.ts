import { Tag } from "../tag";
import { Word } from "../word";
import { Feat } from "./feat";

export class Str extends Feat {
  constructor(c) {
    super(c);
  }
  static k = '"';
  lex() {
    return new Word(this.c.k, Tag.STR);
  }
  parse(tk) {
    this.root(tk, Tag.STR);
    this.edge(";");
  }
  eval() {
    return this.emit("console.log(" + this.w[0].k + ")");
  }
}
