const bcrypt = require("bcrypt");
const User = require("../../models/user.models");
const saltRounds = 10;
const { messages } = require("../../services/constants");

exports.userLogin = async (req, res) => {
    console.log("post req body ++++", req.body);
    res.status(200).send({
        ...req.body,
        message: messages.successAuthMessage,
    });
};

exports.userRegister = async (req, res) => {
    try {
        console.log("post req body", req.body);

        const user = await User.findOne({
            email: req.body.email.toLowerCase(),
        });
        if (!user) {
            bcrypt.hash(req.body.pass, saltRounds, function(err, hash) {
                console.log("pass hash", hash);
                if (err) {
                    return res.status(500).send({
                        message: messages.errorMessage,
                    });
                }
                const user = new User({
                    ...req.body,
                    email: req.body.email.toLowerCase(),
                    phoneNumber: req.body.phoneNumber,
                    password: hash,
                });
                console.log("user data before", user);
                user.save((err, user) => {
                    if (err) {
                        console.log("err ---", err);
                        return res.status(500).send({
                            message: messages.errorMessage,
                        });
                    }
                    console.log("user data after", user);
                    // sendEmail.sendInfoSignUp(user)
                    // sendEmail.sendWaitEmailForReceiver(user)
                    return res.status(201).send({
                        message: messages.successUserCreated,
                    });
                });
            });
        } else {
            res.status(409).send({
                message: messages.errorAlreadyExists,
            });
        }
    } catch (e) {
        console.log(e);
        console.log(e.message);
    }
};
