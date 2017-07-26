let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'Socket.io'});
});

router.get('/time', function (req, res, next) {
  res.render('time', {title: 'Socket.io'});
});

router.get('/connections', function (req, res, next) {
  res.render('analytics', {title: 'Socket.io'});
});

module.exports = router;
