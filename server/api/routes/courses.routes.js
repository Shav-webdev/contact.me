const { Router } = require("express");
const bodyParser = require("body-parser");
const router = Router();
const jsonParser = bodyParser.json();
const passport = require("passport");
const { createCourse, getCourses } = require("../handlers/courses.handlers");

router.post(
    "/courses",
    passport.authenticate("jwt", { session: false }),
    jsonParser,
    createCourse
);

router.get(
    "/courses",
    passport.authenticate("jwt", { session: false }),
    getCourses
);

module.exports = router;
