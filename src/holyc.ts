import { Files } from "./files";
import { Lexer } from "./lexer";

class HolyC {
  constructor() {
    Files.stdin = process.argv[2];
    const lexer = new Lexer();
    console.log(lexer.lex().k);
  }
}
new HolyC();
