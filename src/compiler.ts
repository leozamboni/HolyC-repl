import { Eval } from "./eval";
import { Files } from "./files";

export class Compiler extends Eval {
  constructor() {
    super();
  }
  run() {
    while (this.i < Files.stdin.length) {
      this.eval(this.parse(this.lex()));
    }
  }
}
