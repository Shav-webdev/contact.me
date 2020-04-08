const { Router } = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const checkAuthMiddleware = require("../../middlewares/checkAuth.middleware");

const router = Router();
const jsonParser = bodyParser.json();
const { getAllUsers, getUserById } = require("../handlers/users.handlers");

router.get(
    "/users",
    passport.authenticate("jwt", { session: false }),
    getAllUsers
);
router.get(
    "/users/:id",
    passport.authenticate("jwt", { session: false }),
    getUserById
);

module.exports = router;