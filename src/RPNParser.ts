import operators from "./Operators";
const regexString = `(\\d*\.?\d+|\\+|-|\\*|\/|\\^|\\(|\\)|${Object.keys(operators).map(f => f.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`;
const regex = new RegExp(regexString, 'g');

export default function toRPN(input: string): string {
    const opSymbols = Object.keys(operators);
    const stack: string[] = [];
    let output = '';

    const peek = () => stack[stack.length - 1];
    const pop = () => stack.pop()!;
    const push = (token: string) => stack.push(token);
    const append = (token: string) => output += ` ${token}`;

    const tokens = input
        .split(regex)
        .filter(t => t && t.trim().length > 0)
        .map(t => t.trim());

    for (const token of tokens) {
        if (!isNaN(parseFloat(token))) {
            append(token);
        } else if (opSymbols.includes(token)) {
            while (opSymbols.includes(peek()) &&
                ((operators[token].association === 'left' && operators[token].precedence <= operators[peek()].precedence) ||
                    (operators[token].association === 'right' && operators[token].precedence < operators[peek()].precedence))) {
                append(pop());
            }
            push(token);
        } else if (token === '(') {
            push(token);
        } else if (token === ')') {
            while (peek() !== '(') append(pop());
            pop();
        } else {
            throw new Error(`Unknown token: ${token}`);
        }
    }
    while (stack.length > 0) append(pop());
    return output.trim();
};