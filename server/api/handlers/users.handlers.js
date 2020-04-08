const User = require("../../models/user.models");
const { selectTypes } = require("../../services/constants");

module.exports.getAllUsers = async (req, res) => {
    const users = await User.find({});
    if (users.length > 0) {
        res.status(200).send({ users });
    } else {
        res.status(404).send({ message: "No users found" });
    }
};

module.exports.getUserById = async (req, res) => {
    try {
        console.log("req.params", req.params);
        const _id = req.params.id;
        console.log("req.params.id", req.params.id);
        console.log("userId", _id);
        const user = await User.findOne({ _id }).select(
            selectTypes.userGetById
        );
        if (user) {
            console.log("user", user);
            res.status(200).send({ user });
        } else {
            res.status(404).send({ message: "No user found" });
        }
    } catch (e) {
        console.log("error", e);
    }
};
