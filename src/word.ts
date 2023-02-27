import { Token } from "./token.js";

export class Word extends Token {
  t;
  constructor(k, t) {
    super(k);
    this.t = t;
  }
}
