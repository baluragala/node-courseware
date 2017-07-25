exports = module.exports = function (req, res, next) {
  console.log(`Host : ${req.get('host')} 
User Agent:${req.get('user-agent')}
Body : ${JSON.stringify(req.body)}
Params : ${JSON.stringify(req.params)}
QueryString : ${JSON.stringify(req.query)}`);
  next();
};