const jwt = require("jsonwebtoken");
const config = require("../utils/config");
const { messages } = require("../services/constants");

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        req.userData = jwt.verify(token, config.jwt.key);
        next();
    } catch {
        return res.status(401).send({
            message: messages.errorMessage,
        });
    }
};
