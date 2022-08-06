const fs = require("fs");
const server = require("http").createServer();

/// read large file and send result to a client

// Solution 1
// server.on("request", (req, res) => {
//   fs.readFile("test-file.txt", (err, data) => {
//     if (err) console.log(err);
//     res.end(data);
//   });
// });

// Solution 2 Via strems
// server.on("request", (req, res) => {
//   const readble = fs.createReadStream("test-fifgfegle.txt");
//   readble.on("data", (chunk) => {
//     res.write(chunk);
//   });
//   readble.on("end", () => {
//     res.end();
//   });
//   readble.on("error", (err) => {
//     console.log(err);
//     res.statusCode = 500;
//     res.end("File not found");
//   });
// });

// Solution 3

server.on("request", (req, res) => {
  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res);
});

server.listen(8000, "127.0.0.1", () => console.log("Listening... "));
