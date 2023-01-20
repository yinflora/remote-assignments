const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello, My Server!");
});

router.get("/getData", (req, res) => {
  let answer;
  if (!req.query.number) {
    res.send("Lack of Parameter");
  } else {
    if (isNaN(req.query.number)) {
      answer = "Wrong Parameter";
    } else {
      answer = ((1 + Number(req.query.number)) * Number(req.query.number)) / 2;
    }
    res.send(`${answer}`);
  }
});

router.post("/getData", (req, res) => {
  let answer = ((1 + Number(req.body.number)) * Number(req.body.number)) / 2;
  res.send(`${answer}`);
});

module.exports = router;
