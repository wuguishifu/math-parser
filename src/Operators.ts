const operators: {
    [key: string]: {
        precedence: number;
        association: 'right' | 'left';
        inputs: number;
        f: (...args: number[]) => number;
    };
} = {
    pi: { precedence: 6, association: 'right', inputs: 0, f: () => Math.PI },
    exp: { precedence: 5, association: 'right', inputs: 1, f: Math.exp },
    abs: { precedence: 5, association: 'right', inputs: 1, f: Math.abs },
    ln: { precedence: 5, association: 'right', inputs: 1, f: Math.log },
    log: { precedence: 5, association: 'right', inputs: 2, f: (a, b) => Math.log(a) / Math.log(b) },
    sin: { precedence: 5, association: 'right', inputs: 1, f: Math.sin },
    cos: { precedence: 5, association: 'right', inputs: 1, f: Math.cos },
    tan: { precedence: 5, association: 'right', inputs: 1, f: Math.tan },
    asin: { precedence: 5, association: 'right', inputs: 1, f: Math.asin },
    acos: { precedence: 5, association: 'right', inputs: 1, f: Math.acos },
    atan: { precedence: 5, association: 'right', inputs: 1, f: Math.atan },
    sqrt: { precedence: 5, association: 'right', inputs: 1, f: Math.sqrt },
    nroot: { precedence: 5, association: 'right', inputs: 2, f: (a, b) => a ** (1 / b) },
    '^': { precedence: 4, association: 'right', inputs: 2, f: (a, b) => a ** b },
    '*': { precedence: 3, association: 'left', inputs: 2, f: (a, b) => a * b },
    '/': { precedence: 3, association: 'left', inputs: 2, f: (a, b) => a / b },
    '+': { precedence: 2, association: 'left', inputs: 2, f: (a, b) => a + b },
    '_': { precedence: 2, association: 'right', inputs: 1, f: (a) => -a }, // unary minus
    '-': { precedence: 2, association: 'left', inputs: 2, f: (a, b) => a - b }, // binary minus
};

export default operators;