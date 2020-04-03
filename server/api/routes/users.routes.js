const { Router } = require("express");
const router = Router();
let bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const { userLogin, userRegister } = require("../handlers/users.handlers");

router.post("/login", jsonParser, userLogin);
router.post("/register", jsonParser, userRegister);

module.exports = router;
