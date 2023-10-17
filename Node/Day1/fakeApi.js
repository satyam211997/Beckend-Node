const http = require("http");
const url = require("url");
const PORT = 4545;
http
  .createServer((req, res) => {
    const parsedURL = url.parse(req.url, true);
    const { query, pathname } = parsedURL;
    // console.log("Query", query);
    // console.log(pathname, "PathName");

    if (pathname === "/") {
      res.write("Hello");
    } else if (pathname === "/products") {
      let allProduct = require("./products.json");
      res.write(JSON.stringify(allProduct));
    } else if (pathname === "/category") {
      let category = require("./products.json");
      res.write(JSON.stringify(category === category));
    }
    res.end();
  })
  .listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
  });
