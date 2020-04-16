"use strict";

var a = '1';
var b = ['1', '2', '3'];
var someNumbers = {
  '0': 10,
  '1': 15,
  length: 2
};
var c = Array.from(someNumbers, function (value) {
  return value * 2;
}); // => [20, 30]

console.log(c); // console.log(b.includes(a));
//# sourceMappingURL=example.js.map