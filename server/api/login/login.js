const { Router } = require('express');
const router = Router();
const Users = require('../../models/users.models');
let bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

router.post('/login', jsonParser, (req, res) => {
    console.log('post req body', req.body);
    res.send("It's ok, login");
});

router.post('/register', jsonParser, (req, res) => {
    console.log('post req body', req.body);
    res.send("It's ok, register");
});

module.exports = router;
