const express = require('express');
const router = express.Router();

/* --- Assignment 1 --- */

router.get('/', (req, res) => {
    res.send('Hello, My Server!');
});

/* --- Assignment 5 --- */

router.get('/myName', (req, res) => {
    const name = req.cookies.username;
    if (name) {
        res.render('myName', { name });
    } else {
        res.render('myName');
    }
});

// router.post("/myName", (req, res) => {
//   res.cookie('username', req.body.username);
//   res.redirect("/trackName?name=" + name);
// });

// router.get("/trackName", (req, res) => {
//   res.cookie('username', req.query.name);
//   res.redirect("/myName");
// });

router.post('/trackName', (req, res) => {
    if (req.body.username) {
        res.cookie('username', req.body.username);
        res.redirect('/myName');
    } else if (req.query.name) {
        res.cookie('username', req.query.name);
        res.redirect('/myName');
    }
});

module.exports = router;
