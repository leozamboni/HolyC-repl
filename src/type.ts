import { Tag } from "./tag";
import { Token } from "./token.js";

export class Type extends Token {
  static bool = new Type("Bool", Tag.DTYPE);
  static i0 = new Type("I0", Tag.DTYPE);
  static i8 = new Type("I8", Tag.DTYPE);
  static i16 = new Type("I16", Tag.DTYPE);
  static i32 = new Type("I32", Tag.DTYPE);
  static i64 = new Type("I64", Tag.DTYPE);
  static u0 = new Type("U0", Tag.DTYPE);
  static u8 = new Type("U8", Tag.DTYPE);
  static u16 = new Type("U16", Tag.DTYPE);
  static u32 = new Type("U32", Tag.DTYPE);
  static u64 = new Type("U64", Tag.DTYPE);
  static f64 = new Type("F64", Tag.DTYPE);
  t;
  constructor(k, t) {
    super(k);
    this.t = t;
  }
}
