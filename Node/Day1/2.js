const http = require("http");
const url = require("url");
const PORT = 7800;

//create a server object:
const server = http
  .createServer((req, res) => {
    const path = req.url.split("?")[0];
    if (path === "/") {
      var query = url.parse(req.url, true).query;
      console.log("Query: ", query);
      res.write("Hello NodeJS");
    } else if (path === "/calculator") {
      var query = url.parse(req.url, true).query;
      let sum = 0;
      for (let i = 1; i <= query.num; i++) {
        sum += i;
      }
      console.log("Query: ", query);
      res.write("Hello Calculator: " + sum);
    } else {
      res.write("No API found");
    }

    res.end(); //end the response
  })

  .listen(7800, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  }); //the server object listens on port 8080
