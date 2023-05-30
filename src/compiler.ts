import { Eval } from "./eval";
import { Files } from "./files";
import { Symt } from "./symt";

export class Compiler extends Eval {
  static symt: Symt = new Symt(new Object());
  code: string;
  constructor() {
    super();
    this.code = "";
  }
  run() {
    while (this.i < Files.stdin.length) {
      this.code += this.eval(this.parse(this.lex()));
    }
    console.log(this.code);
    eval(this.code);
  }
}
