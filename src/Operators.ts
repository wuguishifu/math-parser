const operators: {
    [key: string]: {
        precedence: number;
        association: 'right' | 'left';
        inputs: number;
        f: (...args: number[]) => number;
    };
} = {
    sin: {
        precedence: 5,
        association: 'right',
        inputs: 1,
        f: Math.sin,
    },
    cos: {
        precedence: 5,
        association: 'right',
        inputs: 1,
        f: Math.cos,
    },
    tan: {
        precedence: 5,
        association: 'right',
        inputs: 1,
        f: Math.tan,
    },
    sqrt: {
        precedence: 5,
        association: 'right',
        inputs: 1,
        f: Math.sqrt,
    },
    '^': {
        precedence: 4,
        association: 'right',
        inputs: 2,
        f: (a, b) => a ** b,
    },
    '*': {
        precedence: 3,
        association: 'left',
        inputs: 2,
        f: (a, b) => a * b,
    },
    '/': {
        precedence: 3,
        association: 'left',
        inputs: 2,
        f: (a, b) => a / b,
    },
    '+': {
        precedence: 2,
        association: 'left',
        inputs: 2,
        f: (a, b) => a + b,
    },
    '-': {
        precedence: 2,
        association: 'left',
        inputs: 2,
        f: (a, b) => a - b,
    }
};

export default operators;