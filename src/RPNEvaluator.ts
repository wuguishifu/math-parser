import operators from "./Operators";

export default function evaluate(input: string): number {
    const stack: (string | number)[] = [];
    const tokens = input.split(' ');
    for (const token of tokens) {
        if (!isNaN(parseFloat(token))) {
            stack.push(parseFloat(token));
        } else {
            if (token in operators) {
                const { inputs, f } = operators[token];
                const args = [];
                for (let i = 0; i < inputs; i++) args.push(stack.pop()! as number);
                args.reverse();
                stack.push(f(...args));
                continue;
            } else {
                throw new Error(`Unknown token: ${token}`);
            }
        }
    }
    return stack.pop() as number;
};