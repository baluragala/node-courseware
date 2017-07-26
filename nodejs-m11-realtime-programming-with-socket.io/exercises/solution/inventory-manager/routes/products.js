let express = require('express');
let router = express.Router();

/*
{"id": 100, "title": "iphone", "stock": 100, "price":100}
*/

let products = [
  {"id": 100, "title": "iphone1", "stock": 100, "price": 100},
  {"id": 101, "title": "iphone2", "stock": 100, "price": 200},
  {"id": 102, "title": "iphone3", "stock": 100, "price": 300},
  {"id": 103, "title": "iphone4", "stock": 100, "price": 400}
];

router.get('/dashboard', function (req, res, next) { // APPLICATION MIDDLEWARE
  res.render('dashboard')
});


/* GET products listing. */
router.get('/', function (req, res, next) { // APPLICATION MIDDLEWARE
  res.json(products);
});


/* POST products (create) */
router.post('/', function (req, res, next) { // APPLICATION MIDDLEWARE
  products.push(req.body);
  res.json(req.body);
});


router.post('/sale/:productId', function (req, res, next) {
  let productIndex = products.findIndex((product) => product.id === parseInt(req.params['productId']));
  let product = products.splice(productIndex, 1);
  product[0].stock--;
  products.push(product[0]);
  req.io.emit('sale', products);
  res.sendStatus(204);
});

router.post('/replenish/:productId/:qty', function (req, res, next) {
  let productIndex = products.findIndex((product) => product.id === parseInt(req.params['productId']));
  let product = products.splice(productIndex, 1)[0];
  product.stock = product.stock + parseInt(req.params['qty']);
  products.push(product);
  req.io.emit('replenish', products);
  res.sendStatus(204);
});

module.exports = router;
module.exports.products = products;
