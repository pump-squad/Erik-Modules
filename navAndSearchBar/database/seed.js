const Product = require('./index.js');
const fs = require ('fs');

fs.readFile(__dirname + '/../../Data Generation/products.json', (err, data) => {
  var products = JSON.parse(data.toString()).products;
  if (err) {
    console.log("error reading products", err);
    return;
  }

  for (var product of products) {
     Product.create(product)
       .then((result) => console.log(result))
       .catch((err) => console.errpr(err));
  }

});

