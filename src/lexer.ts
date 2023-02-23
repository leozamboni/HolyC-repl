import { Scanner } from "./scanner";
import { Token } from "./token";
import { Word } from "./word";

export class Lexer extends Scanner {
  "&" = () => {
    if (this.checkAhead("&")) return Word.and;
    else return new Token("&");
  };
  "|" = () => {
    if (this.checkAhead("|")) return Word.or;
    else return new Token("|");
  };
  "=" = () => {
    if (this.checkAhead("=")) return Word.eq;
    else return new Token("=");
  };
  "!" = () => {
    if (this.checkAhead("=")) return Word.ne;
    else return new Token("!");
  };
  "<" = () => {
    if (this.checkAhead("=")) return Word.le;
    else return new Token("<");
  };
  ">" = () => {
    if (this.checkAhead("=")) return Word.ge;
    else return new Token(">");
  };
  constructor() {
    super();
  }
  lex() {
    const T = () => Word;
    return this.scan(
      Object.keys(this)
        .filter((k) => typeof this[k] === typeof T)
        .reduce((a, v) => ({ ...a, [v]: this[v] }), {}) as {
        key: () => Word;
      }[]
    );
  }
}
