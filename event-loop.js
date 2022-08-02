const fs = require("fs");
const crypto = require("crypto");

process.env.UV_THREADPOOL_SIZE = 10;

const start = Date.now();
setTimeout(() => console.log("Timer 1 finished"), 0);
setImmediate(() => console.log("Immediate one finished"));

fs.readFile("test-file.txt", () => {
  console.log("I/O finished");
  console.log("--------------");
  setTimeout(() => console.log("Timer 2 finished"), 0);
  setTimeout(() => console.log("Timer 3 finished"), 3000);
  setImmediate(() => console.log("Immediate 2 one finished"));

  process.nextTick(() => console.log("Process next tick"));

  crypto.pbkdf2("password", "salt", 1000000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted!");
  });
  crypto.pbkdf2("password", "salt", 1000000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted!");
  });
  crypto.pbkdf2("password", "salt", 1000000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted!");
  });
  crypto.pbkdf2("password", "salt", 1000000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted!");
  });
  crypto.pbkdf2("password", "salt", 1000000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted!");
  });
});
process.nextTick(() => console.log("Process next tickKKK"));
//comes 1
console.log("Hello from the top level code!");
