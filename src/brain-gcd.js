const gcd = (...args) => {
    for (var x = args[0], i = 1; i < args.length; i++) {
      var y = args[i];
      while (x && y) {
        x > y ? x %= y : y %= x;
      }
      x += y;
    }
    return x;
}

export default () => {
    const q1 = Math.round(Math.random() * 100);
    const q2 = Math.round(Math.random() * 100);
    return [`${q1} ${q2}`, `${gcd(q1, q2)}`];
}