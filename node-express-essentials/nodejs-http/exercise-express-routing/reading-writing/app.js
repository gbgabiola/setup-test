const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let products = [];

app
  .route('/products')
  .get((req, res) => {
    res.json(products);
  })
  .post((req, res) => {
    const newProduct = { ...req.body, id: products.length + 1 };
    products = [...products, newProduct];
    res.json(newProduct);
  })
  .put((req, res) => {
    let updateProduct;
    products = products.map(product => {
      if (product.id === req.body.id) {
        updateProduct = { ...product, ...req.body };
        return updateProduct;
      }
      return product;
    });
    res.json(updateProduct);
  })
  .delete((req, res) => {
    const deleteProduct = products.find(product => product.id === +req.body.id);
    products = products.filter(product => product.id !== +req.body.id);
    res.json(deleteProduct);
  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
