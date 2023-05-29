import { Tag } from "../tag";
import { Word } from "../word";
import { Stmt } from "./stmt";

export class Class extends Stmt {
  constructor(c) {
    super(c);
  }
  static k = "class";
  lex() {
    return new Word("class", Tag.CLASS);
  }
  parse(tk) {
    this.root(tk, Tag.CLASS);
    this.edge(Tag.ID);
    this.edge("{");
    while (true) {
      this.edge([Tag.DTYPE, Tag.ID]);
      this.edge(Tag.ID);
      if (this.c.charAHead(";")) {
        this.edge(";");
      } else if (this.c.charAHead("}")) {
        this.edge("}");
        break;
      } else {
        while (true) {
          this.edge(",");
          this.edge(Tag.ID);
          if (this.c.charAHead(";")) {
            this.edge(";");
            break;
          }
        }
      }
      if (this.c.tokenAhead("}")) {
        this.edge("}");
        break;
      }
    }
    this.edge(Tag.ID);
    this.edge(";");
    console.log(this.w);
  }
  eval() {}
}
