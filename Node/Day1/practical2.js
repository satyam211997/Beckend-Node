const http = require("http");
const url = require("url");
const PORT = 4500;
//

const server = http
  .createServer((req, res) => {
    const path = req.url.split("?")[0];
    if (path === "/") {
      const query = url.parse(req.url, true).query;
      console.log("Query", query);
      res.write("hello ");
    }
    res.end();
  })
  .listen(4500, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
