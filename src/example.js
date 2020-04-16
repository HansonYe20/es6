const a = '1';
const b = ['1','2','3'];

const someNumbers = { '0': 10, '1': 15, length: 2 };

const c = Array.from(someNumbers, value => value * 2); // => [20, 30]
console.log(c);

// console.log(b.includes(a));