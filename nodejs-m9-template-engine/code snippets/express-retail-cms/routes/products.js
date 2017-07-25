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


module.exports = router;
