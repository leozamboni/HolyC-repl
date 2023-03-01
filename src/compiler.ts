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
      this.code += this.eval(this.parse(this.lex()));
    }
    console.log(this.code);
    eval(this.code);
  }
}
