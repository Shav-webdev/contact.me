const { Router } = require("express");
const bodyParser = require("body-parser");
const router = Router();
const jsonParser = bodyParser.json();
const passport = require("passport");
const { createCourse } = require("../handlers/courses.handlers");

router.post(
    "/courses",
    passport.authenticate("jwt", { session: false }),
    jsonParser,
    createCourse
);

module.exports = router;
