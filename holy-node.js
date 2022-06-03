/**
 * @Copyright Leonardo Z. Nunes 2022
 * @license MIT
 * @fileoverview JS HolyC Interpreter
 * @version 0.0.0
 */
import { holy_node } from './holyc-interpreter/holyc-interpreter.js'
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

/**
 * Command line interface
 */
const cli = async () => {
    const rl = readline.createInterface({ input, output });

    let file = '';

    while (1) {
        const input = await rl.question('> ');
        if (input === ".exit") break;
        file += input;
        console.log(holy_node(file));
    }

    rl.close();
}

const run = (runtime, stdin) => {
    if (runtime === "cli") {
        cli();
    } else {
        console.log(holy_node(stdin))
    }
}

/**
 * Run interpreter
 * @arg {string} process.argv[2] which runtime
 * @arg {string} process.argv[3] file
 */
run(process.argv[2], process.argv[3]);