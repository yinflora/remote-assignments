const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index");
});

router.get("/getData", (req, res) => {
    let answer;
    if (!req.query.number) {
        res.send("Lack of Parameter");
    } else {
        if (isNaN(req.query.number)) {
            answer = "Wrong Parameter";
        } else {
            answer =
                ((1 + Number(req.query.number)) * Number(req.query.number)) / 2;
        }
        res.send(`${answer}`);
    }

    // res.render("getData", answer);
});

module.exports = router;
