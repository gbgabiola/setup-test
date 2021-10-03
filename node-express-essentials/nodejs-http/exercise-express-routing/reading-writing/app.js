const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let products = [];

app.post('/products', function (req, res) {
  const newProduct = { ...req.body, id: products.length + 1 };
  products = [...products, newProduct];
  res.json(newProduct);
});

app.put('/products', function (req, res) {
  let updateProduct;
  products = products.map(product => {
    if (product.id === req.body.id) {
      updateProduct = { ...product, ...req.body };
      return updateProduct;
    }
    return product;
  });
  res.json(updateProduct);
});

app.delete('/products/:id', function (req, res) {
  // implement
});

app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
