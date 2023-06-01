import { Compiler } from "./compiler";

const stdin = process.argv[2];
export const dev = process.argv[process.argv.length - 1] === "--dev";

class HolyC {
  compiler: Compiler;
  constructor() {
    this.compiler = new Compiler(stdin);
  }
}

const HC = new HolyC();
HC.compiler.run();
console.log(Compiler.files.stderr);
HC.compiler.interpret();
