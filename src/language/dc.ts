import { Token } from "../token";
import { Feat } from "./feat";

export class Dc extends Feat {
  constructor(c) {
    super(c);
  }
  static k = ";";
  lex() {
    return new Token(";");
  }
  parse() {
    throw new Error("Method not implemented.");
  }
  eval() {
    throw new Error("Method not implemented.");
  }
}
