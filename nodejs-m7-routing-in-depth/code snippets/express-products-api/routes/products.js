let express = require('express');
let router = express.Router();

let products = [];

let premiumProductsMobiles = [
  {id: 100, title: 'iphone'},
  {id: 101, title: 'pixel phone'}
];

let premiumProductsComputers = [
  {id: 100, title: 'chrome book'},
  {id: 101, title: 'mac book pro'}
];

/* GET products listing. */
router.get('/', function (req, res, next) { // APPLICATION MIDDLEWARE
  res.json(products);
});

/* GET premium products listing. */
router.get('/PP*M', function (req, res, next) { // APPLICATION MIDDLEWARE
  res.json(products.concat(premiumProductsMobiles));
});

router.get('/PP*C', function (req, res, next) { // APPLICATION MIDDLEWARE
  res.json(products.concat(premiumProductsComputers));
});


/* GET products by id (route params) */
router.get('/:id([0-9]{3})', function (req, res, next) { // APPLICATION MIDDLEWARE
  let product = products.find((product) => product.id === parseInt(req.params.id));
  console.log(product);
  if (!product) {
    res.sendStatus(404);
    return;
  }
  res.json(product);
});

/* POST products (create) */
router.post('/', function (req, res, next) { // APPLICATION MIDDLEWARE
  products.push(req.body);
  res.json(req.body);
});

/* PUT products (update) */
router.put('/:id', function (req, res, next) { // APPLICATION MIDDLEWARE
  let purgeIndex = products.findIndex((product) => product.id === parseInt(req.params.id));
  console.log(purgeIndex);
  if (purgeIndex === -1) {
    res.sendStatus(404);
    return;
  }
  products.splice(purgeIndex, 1);
  console.log(products);
  products.push(req.body);
  res.json(req.body);
});

/* DELETE products (delete) */
router.delete('/:id', function (req, res, next) { // APPLICATION MIDDLEWARE
  let purgeIndex = products.findIndex((product) => product.id === parseInt(req.params.id));
  if (purgeIndex === -1) {
    res.sendStatus(404);
    return;
  }
  products.splice(purgeIndex, 1);
  res.sendStatus(204);
});

module.exports = router;
