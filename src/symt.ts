import { TokenType } from "./interface";

export enum SymtT {
  CLASS = 256,
}

export class Symt {
  table: { [k in SymtT]: TokenType[] };
  constructor(table) {
    this.table = table;
  }
  push(t: SymtT, tk: TokenType) {
    if (!this.table[t]) {
      this.table[t] = [];
    }
    this.table[t].push(tk);
  }
  check(t: SymtT, tk: TokenType): boolean {
    if (!this.table[t]) {
      return false;
    }
    if (this.table[t].find((e) => e.k === tk.k)) return true;
    return false;
  }
  get(t: SymtT, tk: TokenType): TokenType | undefined {
    if (!this.table[t]) {
      return undefined;
    }
    return this.table[t].find((e) => e.k === tk.k);
  }
}
