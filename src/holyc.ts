import { Compiler } from "./compiler";

const stdin = process.argv[2];

class HolyC {
  compiler: Compiler;
  constructor() {
    this.compiler = new Compiler(stdin);
  }
}

const HC = new HolyC();
HC.compiler.run();
console.log(Compiler.files.stdout);
console.log(Compiler.files.stderr);
HC.compiler.interpret();
