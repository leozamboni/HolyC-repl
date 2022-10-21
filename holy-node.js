/**
 * @Copyright Leonardo Z. Nunes 2022
 * @license MIT
 * @fileoverview HolyNode
 * @version 0.0.0
 */
import { holy_node_idle, holy_node_script } from './HolyJS/holy.js'
import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';


const idle = async () => {
    const rl = readline.createInterface({ input, output });

    while (1) {
        const input = await rl.question('> ');
        if (input === "exit;") break;
        console.log(await holy_node_idle(input));
    }

    rl.close();
}

const run = async (runtime, stdin) => {
    if (runtime === "cli") {
        idle();
    } else {
        console.log(await holy_node_script(stdin))
    }
}

/**
 * Run interpreter
 * @arg {string} process.argv[2] which runtime
 * @arg {string} process.argv[3] file
 */
await run(process.argv[2], process.argv[3]);