const el_count = 9;

export default () => {
    const progress = Math.floor(Math.random() * 10) + 1;
    const unknown_el = Math.floor(Math.random() * el_count);
    const start_el = Math.floor(Math.random() * 50);
    const arr = [];
    let q;

    for (let i = 0; i < el_count; i += 1) {
        const new_val = start_el + i * progress;

        if (i === unknown_el) {
            q = new_val;
            arr.push('..');
            continue;
        }
        arr.push(new_val);
    }

    return [arr.join(' '), `${q}`];
  };