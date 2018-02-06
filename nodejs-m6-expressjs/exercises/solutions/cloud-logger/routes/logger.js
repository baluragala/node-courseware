let express = require("express");
let router = express.Router();

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
router.get("/json", function(req, res, next) {
  res.json(logs);
});

router.get("/html", function(req, res, next) {
  let rows = logs.map(
    log =>
      `<tr><td>${log.type}</td><td>${log.log_datetime}</td><td>${
        log.text
      }</td></tr>`
  );
  res.send(`<table>${rows.join("")}</table>`);
});

// POST log (create)
router.post("/", function(req, res, next) {
  if (req.body.type && req.body.log_datetime && req.body.text) {
    logs.push(req.body);
    res.json(req.body);
  } else {
    res
      .status(400)
      .send(
        "Please ensure type, log_datetime and text fields are part of payload"
      );
  }
});

module.exports = router;
