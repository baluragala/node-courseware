let express = require('express');
let router = express.Router();
let moment = require('moment');

/*
 sample log object
 {
  type: 'info',
  log_datetime: '2017-10-12T13:45:12'
  text: 'Get all logs method is invoked'
 }
 */
let logs = [];

// GET all logs.
router.get('/json', function (req, res, next) {
  res.json(logs);
});

router.get('/html', function (req, res, next) {
  let rows = logs.map(log => `<tr><td>${log.type}</td><td>${log.log_datetime}</td><td>${log.text}</td></tr>`);
  res.send(`<table>${rows.join('')}</table>`);
});

router.get('/filter/type/:type', function (req, res, next) {
  if (['info', 'debug', 'error'].includes(req.params.type)) {
    let filteredLogs = logs.filter(log => log.type === req.params.type);
    res.json(filteredLogs);
  } else {
    res.status(403).send('invalid log type. Must be one of [\'info\', \'debug\', \'error\']');
  }
});


// POST log (create)
router.post('/', function (req, res, next) {
  if (req.body.type && req.body.log_datetime && req.body.text) {
    logs.push(req.body);
    res.json(req.body);
  } else {
    res.status(403).send('Please ensure type, log_datetime and text fields are part of payload')
  }
});

router.delete('/:days', function (req, res, next) {
  let daysToPurge = req.params.days;
  let filteredLogs = logs.filter(log => {
    console.log(log);
    let log_datetime = moment(log.log_datetime);
    let daysDiff = moment.duration(moment().diff(log_datetime)).asDays();
    console.log(daysDiff);
    if (daysDiff >= daysToPurge)
      return false;
    else
      return true;
  });
  let count = logs.length - filteredLogs.length;
  logs = filteredLogs;
  res.status(204).json({count});
});

module.exports = router;
