import { Lexer } from "../lexer";
import { Token } from "../token";
import { Type } from "../type";
import { Word } from "../word";

export abstract class Feat {
  l: Lexer;
  p;
  g;
  constructor(l?, p?, g?) {
    this.l = l;
    this.p = p;
    this.g = g;
  }
  abstract lex(): Token | Word | Type;
  abstract parse();
  abstract gen();
}
