import { Eval } from "./eval";
import { Files } from "./files";
import * as ts from "typescript";

export class Compiler extends Eval {
  code: string;
  constructor() {
    super();
    this.code = "";
  }
  run() {
    while (this.i < Files.stdin.length) {
      const code = this.eval(this.parse(this.lex()));
      console.log(code);
      this.code += code;
    }
    eval(this.code);
  }
}
