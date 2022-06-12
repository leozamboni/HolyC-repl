/**
 * @Copyright Leonardo Z. Nunes 2022
 * @license MIT
 * @fileoverview JS HolyC Interpreter
 * @version 0.0.0
 */
import { holy_node_interactive, holy_node_script } from './holyc-interpreter/holyc-interpreter.js'
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

/**
 * Interactive mode
 */
const interactive = async () => {
    const rl = readline.createInterface({ input, output });

    while (1) {
        const input = await rl.question('> ');
        if (input === ".exit") break;
        console.log(holy_node_interactive(input));
    }

    rl.close();
}

const run = (runtime, stdin) => {
    if (runtime === "cli") {
        interactive();
    } else {
        console.log(holy_node_script(stdin))
    }
}

/**
 * Run interpreter
 * @arg {string} process.argv[2] which runtime
 * @arg {string} process.argv[3] file
 */
run(process.argv[2], process.argv[3]);