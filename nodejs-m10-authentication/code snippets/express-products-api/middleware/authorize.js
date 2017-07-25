exports = module.exports = function (req, res, next) {
  if (req.get('x-access-token')) {
    next();
  }
  else {
    res.status(401).send('Unauthorized, x-access-token header missing');
  }
};