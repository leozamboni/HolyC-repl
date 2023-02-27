import { Compiler } from "./compiler";
import { Files } from "./files";

class HolyC {
  compiler: Compiler;
  constructor() {
    Files.stdin = process.argv[2];

    this.compiler = new Compiler();
    this.compiler.run();
  }
}
new HolyC();
