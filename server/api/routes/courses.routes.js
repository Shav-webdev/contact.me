const { Router } = require("express");
const bodyParser = require("body-parser");
const router = Router();
const jsonParser = bodyParser.json();
const passport = require("passport");
const {
    createCourse,
    getCourses,
    getUserCourses,
} = require("../handlers/courses.handlers");

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

router.get(
    "/courses/:id",
    passport.authenticate("jwt", { session: false }),
    getUserCourses
);

module.exports = router;
