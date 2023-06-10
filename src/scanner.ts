import { Compiler } from "./compiler.js";
import { Stmt } from "./language/stmt.js";
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
  cases!: () => Stmt[];
  constructor(cases: () => Stmt[]) {
    this.cases = cases;
  }
  read() {
    this.k = Compiler.files.stdin[this.i++];
  }
  charAHead(c): boolean {
    return Compiler.files.stdin[this.i] === c;
  }
  checkNext(w): boolean {
    const tk = this.scan();
    if (tk.k) {
      this.i -= tk.k.length;
    }
    return tk?.k === w;
  }
  scan() {
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
      const f = this.cases['"'];
      if (f) return new f(this).lex();
      return new Word(this.k, Tag.STR);
    }
    const f = this.cases[this.k];
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
    if (this.k && /[a-zA-Z#]/i.test(this.k)) {
      let b = "";
      do {
        b += this.k;
        this.read();
      } while (this.k && /[a-zA-Z0-9_#]/i.test(this.k));
      this.i--;
      const s = b;
      const f = this.cases[s];
      if (f) return new f(this).lex();
      return new Word(s, Tag.ID);
    }
    const tok = new Token(this.k);
    this.k = "";
    return tok;
  }
}
