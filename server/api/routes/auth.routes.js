const { Router } = require("express");
const router = Router();
let bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const { authLogin, authRegister } = require("../handlers/auth.handlers");

router.post("/login", jsonParser, authLogin);
router.post("/register", jsonParser, authRegister);

module.exports = router;
