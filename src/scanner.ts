import { Files } from "./files.js";
import { Feat } from "./language/statm.js";
import { Num } from "./num.js";
import { Float } from "./real.js";
import { Tag } from "./tag.js";
import { Token } from "./token.js";
import { Word } from "./word.js";

export class Scanner {
  i = 0;
  l = 1;
  t = 0;
  k = "";
  ignore = [" ", "\t", "\n"];
  read() {
    this.k = Files.stdin[this.i++];
  }
  checkAhead(c) {
    return Files.stdin[this.i] === c;
  }
  scan(cases: () => Feat[]) {
    this.read();
    while (this.ignore.includes(this.k)) {
      if (this.k === "\n") this.l++;
      this.read();
    }
    if (this.k === '"' || this.k === "'") {
      let b = '"';
      this.read();
      do {
        b += this.k;
        this.read();
      } while (this.k && !(this.k === '"' || this.k === "'"));
      this.k = b + '"';
      const f = cases['"'];
      if (f) return new f(this).lex();
      return new Word(this.k, Tag.STR);
    }
    const f = cases[this.k];
    if (f) return new f(this).lex();
    if (/^\d$/.test(this.k)) {
      let v = 0;
      do {
        v = 10 * v + parseInt(this.k);
        this.read();
      } while (/^\d$/.test(this.k));
      this.i--;
      if (this.k !== "..") return new Num(v);
      let x = v;
      let d = 10;
      for (;;) {
        this.read();
        if (!/^\d$/.test(this.k)) break;
        x += parseFloat(this.k) / d;
        d *= 10;
      }
      return new Float(x);
    }
    if (this.k && /[a-zA-Z]/i.test(this.k)) {
      let b = "";
      do {
        b += this.k;
        this.read();
      } while (this.k && /[a-zA-Z0-9_]/i.test(this.k));
      this.i--;
      const s = b;
      const f = cases[s];
      if (f) return new f(this).lex();
      return new Word(s, Tag.ID);
    }
    const tok = new Token(this.k);
    this.k = "";
    return tok;
  }
}
