import { Block } from "./language/block";

export class Utils {
  static block_fix() {
    return "\t".repeat(Block.curr_block_level);
  }
}
