// const http = require("http");
// const PORT = 7000;

// http
//   .createServer((req, res) => {
//     res.write("Hello Satyam");
//     res.end();
//   })
//   .listen(7000, () => {
//     console.log(`this server is running on Port:http://localhost:${PORT}`);
//   });

////////////////////////

const http = require("http");
const url = require("url");
const PORT = 7070;

/////
////Create a server obj
http
  .createServer((req, res) => {
    const query = url.parse(req.url, true).query;
    console.log("Query", query);
    res.write("hello Satyam");
    res.end();
  })
  .listen(7070, () => {
    console.log(`this server is running on Port:http://localhost:${PORT}`);
  });
