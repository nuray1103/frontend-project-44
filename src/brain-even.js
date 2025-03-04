export default () => {
    const q = Math.round(Math.random() * 100);
    return [q, q % 2 === 0 ? "yes" : "no"];
};