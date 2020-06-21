const { Router } = require("express");
const bodyParser = require("body-parser");
const router = Router();
const jsonParser = bodyParser.json();
const passport = require("passport");
const {
    newMessage,
    removeMessage,
    getMessagesByRoom,
} = require("../handlers/messages.handlers");

router.post(
    "/messages",
    passport.authenticate("jwt", { session: false }),
    jsonParser,
    newMessage
);

router.get(
    "/messages/:roomId",
    passport.authenticate("jwt", { session: false }),
    getMessagesByRoom
);

router.delete(
    "/messages/:id",
    passport.authenticate("jwt", { session: false }),
    removeMessage
);

module.exports = router;
