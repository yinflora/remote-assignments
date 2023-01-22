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

router.get("/myName", (req, res) => {
  const name = req.cookies.username;
  if (name) {
    res.render("myName", { name });
  } else {
    res.redirect("/trackName");
  }
});

router.get("/trackName", (req, res) => {
  const name = req.cookies.username;
  if (name) {
    res.redirect("/myName");
  } else {
    res.render("trackName");
  }
});

router.post("/trackName", (req, res) => {
  res.cookie("username", req.body.username);
  res.redirect("/myName");
});

module.exports = router;
