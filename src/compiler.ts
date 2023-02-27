import { Files } from "./files";
import { Parser } from "./parser";

export class Compiler extends Parser {
  constructor() {
    super();
  }
  run() {
    while (this.i < Files.stdin.length) {
      this.parse(this.lex());
    }
  }
}
