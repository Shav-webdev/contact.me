const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../models/user.models");
const { config } = require("../../utils/config");
const { messages, types } = require("../../services/constants");
const nodemailer = require("nodemailer");
const sendGrid = require("nodemailer-sendgrid-transport");
const { registerEmail } = require("../../emails/email.register");

const transporter = nodemailer.createTransport(
    sendGrid({
        auth: { api_key: config.emailSendGridAPI },
    })
);

const saltRounds = 10;
const { validationError } = types;
const {
    errorMessage,
    errorAuthFailed,
    errorAlreadyExists,
    successAuthMessage,
    successUserCreated,
} = messages;

exports.authLogin = async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email.toLowerCase(),
        });
        if (!user) {
            res.status(401).send({
                message: errorAuthFailed,
            });
        }
        const password = req.body.pass;

        bcrypt.compare(password, user.password, function(err, result) {
            if (err) {
                console.log("pass err message", err.message);
            }
            if (!result) {
                res.status(401).send({
                    message: errorAuthFailed,
                });
            } else {
                /*send token*/

                const token = jwt.sign(
                    {
                        email: user.email,
                        userId: user._id,
                    },
                    config.jwt.key,
                    {
                        expiresIn: config.jwt.expiresIn,
                    }
                );
                const auth = {
                    userId: user._id,
                    role: user.role,
                    token: `Bearer ${token}`,
                    expiresIn: config.jwt.expiresIn,
                };
                res.status(200).send({
                    auth,
                    message: successAuthMessage,
                });
            }
        });
    } catch (e) {
        console.log(e);
    }
};

exports.authRegister = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            phoneNumber,
            email,
            pass,
            gender,
            birthday,
        } = req.body;

        const user = await User.findOne({
            email: email.toLowerCase(),
        });
        if (!user) {
            bcrypt.hash(pass, saltRounds, async function(err, hash) {
                if (err) {
                    return res.status(500).send({
                        message: errorMessage,
                    });
                }
                const user = new User({
                    firstName,
                    lastName,
                    gender,
                    birthday,
                    email: email.toLowerCase(),
                    phoneNumber,
                    password: hash,
                });
                await user.save(async (err, user) => {
                    if (err) {
                        console.log("err.message", err.message);
                        console.log("err", err);
                        if (err.name === validationError) {
                            return res
                                .status(400)
                                .send({ message: err.message });
                        }
                        return res.status(404).send({
                            message: errorMessage,
                        });
                    }
                    // sendEmail.sendInfoSignUp(user)
                    // sendEmail.sendWaitEmailForReceiver(user)

                    res.status(201).send({
                        message: successUserCreated,
                    });
                    await transporter.sendMail(
                        registerEmail(user.email, user.firstName)
                    );
                });
            });
        } else {
            res.status(409).send({
                message: errorAlreadyExists,
            });
        }
    } catch (e) {
        console.log(e);
        console.log(e.message);
    }
};
