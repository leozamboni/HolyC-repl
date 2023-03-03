import { Block } from "./block";
import { Feat } from "./feat";

export class Proc extends Feat {
  constructor(c) {
    super(c);
  }
  parse() {
    this.root(this.c.lex(), "(");
    this.edge(")");
    return new Block(this.c).parse();
  }
  eval() {
    return (
      "function " + this.w[1].k + "() {\n" + new Block(this).eval() + "}\n"
    );
  }
}
