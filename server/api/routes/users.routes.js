const { Router } = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");

const router = Router();
const jsonParser = bodyParser.json();
const {
    getAllUsers,
    getUserById,
    updateUserData,
} = require("../handlers/users.handlers");

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
router.put(
    "/users/:id",
    passport.authenticate("jwt", { session: false }),
    jsonParser,
    updateUserData
);

module.exports = router;
