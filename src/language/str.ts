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
    if (this.c.checkAhead(",")) {
      do {
        this.edge(",");
        this.edge([Tag.STR, Tag.ID]);
      } while (this.c.checkAhead(","));
    }
    this.edge(";");
  }
  eval() {
    console.log(this.w);

    let str = "";
    if (this.w[1]?.k) {
      let i = 1;
      // eslint-disable-next-line no-constant-condition
      while (true) {
        const tk = this.w[i] as any;
        if (!tk) break;
        if (tk?.k === ";") break;
        if (tk?.k !== ",") {
          str += "+" + this.w[i].k;
        }
        i++;
      }
    }
    return this.emit("process.stdout.write(" + this.w[0].k + str + ");\n");
  }
}
