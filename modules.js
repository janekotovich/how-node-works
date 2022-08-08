// console.log(arguments);
// console.log(require("module").wrapper);

// Module.exports
const C = require("./testModule1");
const calc1 = new C();
console.log(calc1.add(2, 5));

// Export
// const calc2 = require("./testModule2");
const { add, multiply, divide } = require("./testModule2");
// console.log(calc2.add(2, 5));
console.log(add(2, 5));

// caching
require("./testModule3")();
require("./testModule3")();
require("./testModule3")();
