const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index");
});

router.get("/getData", (req, res) => {
    res.render("getData");
});

module.exports = router;
