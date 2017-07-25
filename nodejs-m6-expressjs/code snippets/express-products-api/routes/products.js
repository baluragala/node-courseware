let express = require('express');
let router = express.Router();

let products = [];

// GET products listing.
router.get('/', function (req, res, next) {
  res.json(products);
});

// POST products (create)
router.post('/', function (req, res, next) {
  products.push(req.body);
  res.json(req.body);
});

module.exports = router;
