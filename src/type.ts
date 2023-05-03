import { Tag } from "./tag";
import { Token } from "./token.js";

export class Type extends Token {
  static bool = new Type("Bool");
  static i0 = new Type("I0");
  static i8 = new Type("I8");
  static i16 = new Type("I16");
  static i32 = new Type("I32");
  static i64 = new Type("I64");
  static u0 = new Type("U0");
  static u8 = new Type("U8");
  static u16 = new Type("U16");
  static u32 = new Type("U32");
  static u64 = new Type("U64");
  static f64 = new Type("F64");
  t;
  constructor(k) {
    super(k);
    this.t = Tag.DTYPE;
  }
}
