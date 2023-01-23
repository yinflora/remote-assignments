const express = require("express");
const router = express.Router();

/* --- Assignment 1 --- */

router.get("/", (req, res) => {
  res.send("Hello, My Server!");
});


/* --- Assignment 5 --- */

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

router.get("/trackName", (req, res) => {
  res.cookie("username", req.query.name);
  const name = res.cookies.username;
  res.redirect("/myName");
});


module.exports = router;
