const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  let number = req.query.number;
  let answer;

  if (!number) {
    answer = "Lack of Parameter";
  } else if (isNaN(number)) {
    answer = "Wrong Parameter";
  } else {
    answer = ((1 + Number(number)) * Number(number)) / 2;
  }
  
  res.send(`${answer}`);
});

module.exports = router;
