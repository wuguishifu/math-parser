import toRPN from './RPNParser';
import evaluate from './RPNEvaluator';

import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Enter an expression: ', (input) => {
    const rpn = toRPN(input);
    console.log(`RPN: ${rpn}`);
    const result = evaluate(rpn);
    console.log(`Result: ${result}`);
    rl.close();
});