const http = require("http");
const url = require("url");
const PORT = 7800;

//create a server object:
http
  .createServer((req, res) => {
    var query = url.parse(req.url, true).query;
    console.log("Query: ", query);
    res.write("Hello NodeJS"); //write a response to the client
    res.end(); //end the response
  })
  .listen(7800, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  }); //the server object listens on port 8080
