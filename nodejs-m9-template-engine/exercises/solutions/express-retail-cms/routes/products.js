let express = require('express');
let router = express.Router();

/*
{
  "id":100,
  "title":"iphone",
  "price":600,
  "stock":10
}
 */

let id = 100;
let products = [];
/* GET products listing. */
router.get('/', function (req, res, next) {
  res.render('products/index', {products});
});

router.get('/add', function (req, res, next) {
  res.render('products/create', {});
});

router.post('/add', function (req, res, next) { // APPLICATION MIDDLEWARE
  console.log(req.body);
  req.body.id = ++id;
  products.push(req.body);
  res.redirect('/products');
});


router.get('/:id', function (req, res, next) {
  let product = products.find(product => parseInt(product.id) === parseInt(req.params['id']));
  console.log(products, product);
  if (product) {
    res.render('products/update', {product});
  } else {
    next(new Error('Not Found'))
  }
});

router.post('/:id', function (req, res, next) {
  let productIndex = products.findIndex(product => product.id === parseInt(req.params['id']));
  console.log(productIndex);
  req.body.id = req.params.id;
  products[productIndex] = req.body;
  if (productIndex >= 0) {
    res.redirect('/products');
  } else {
    next(new Error('Not Found'))
  }
});


module.exports = router;
