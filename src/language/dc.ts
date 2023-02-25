import { Token } from "../token";
import { Feat } from "./feat";

export class Dc extends Feat {
  constructor(l?, p?, g?) {
    super(l, p, g);
  }
  static k = ";";
  lex() {
    return new Token(";");
  }
  parse() {
    throw new Error("Method not implemented.");
  }
  gen() {
    throw new Error("Method not implemented.");
  }
}
