import { Scanner } from "./scanner";
import { Token } from "./token";
import { Type } from "./type";
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
  "TRUE" = () => Word.true;
  "FALSE" = () => Word.false;
  "Bool" = () => Type.bool;
  "I0" = () => Type.i0;
  "I8" = () => Type.i8;
  "I16" = () => Type.i16;
  "I32" = () => Type.i32;
  "I64" = () => Type.i64;
  "U0" = () => Type.u0;
  "U8" = () => Type.u8;
  "U16" = () => Type.u16;
  "U32" = () => Type.u32;
  "U64" = () => Type.u64;
  "F64" = () => Type.f64;
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
