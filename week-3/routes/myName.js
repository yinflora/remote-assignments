const express = require("express");
const router = express.Router();

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

// router.get("/trackName", (req, res) => {
//   const name = req.params.name;
//   res.render("myName", name);
// });

router.get("/trackName", (req, res) => {
  res.cookie("username", req.params.name);
  res.send("/myName");
});

module.exports = router;
