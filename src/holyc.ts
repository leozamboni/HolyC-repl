import { Files } from "./files";
import { Lexer } from "./lexer";

class HolyC {
  constructor() {
    Files.stdin = process.argv[2];
    const lexer = new Lexer();
    while (lexer.i < Files.stdin.length) {
      // lexer.lex();
      console.log(lexer.lex()?.k);
    }
  }
}
new HolyC();
