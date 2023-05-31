import { TokenType } from "./interface";
import { Block } from "./language/block";

export class Utils {
  static block_fix(): string {
    return "\t".repeat(Block.curr_block_level);
  }
  static get_line(
    curr_i: number,
    w_arr: TokenType[],
    end_c: string
  ): TokenType[] {
    const sliced_arr = w_arr.slice(curr_i, w_arr.length);
    const i_line = sliced_arr.findIndex((e) => e?.k === end_c) + 1;
    return sliced_arr.slice(0, i_line);
  }
}
