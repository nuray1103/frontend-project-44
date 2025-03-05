const is_prime = (val) => val % 2 === 0;

export default () => {
    const q = Math.round(Math.random() * 100);
    return [`${q}`, `${is_prime(q1) ? "yes" : "no"}`];
}