const express = require("express");
const app = express();
const port = 3000;
const products = require("./product.json");

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/products", (req, res) => {
  res.send(products);
});
app.get("/products/:productId", (req, res) => {
  const { productId } = req.params;
  const product = products.find((item) => item.id === +productId);
  res.send(product);
});
app.get("/:category", (req, res) => {
  const { category } = req.params;
  const cat = products.category;
  res.send(cat);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
