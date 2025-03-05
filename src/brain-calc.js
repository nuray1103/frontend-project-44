const operations = [
    ['+', (x, y) => x + y], ['-', (x, y) => x - y], ['*', (x, y) => x * y],
];

export default () => {
    const q1 = Math.round(Math.random() * 100);
    const q2 = Math.round(Math.random() * 100);
    const [op, op_func] = operations[Math.floor(Math.random() * operations.length)];
    return [`${q1} ${op} ${q2}`, `${op_func(q1, q2)}`];
};