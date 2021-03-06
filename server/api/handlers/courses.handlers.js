const Course = require("../models/courses.model");
const { messages, types } = require("../../services/constants");

const { validationError } = types;
const { errorMessage, successCourseCreated } = messages;

module.exports.createCourse = async (req, res) => {
    if (req.body.course && req.body.description && req.body.userId) {
        const course = new Course({
            author: req.body.userId,
            title: req.body.course,
            description: req.body.description,
        });

        await course.save(async (err, user) => {
            if (err) {
                console.log("err.message", err.message);
                console.log("err", err);
                if (err.name === validationError) {
                    return res.status(400).send({ message: err.message });
                }
                return res.status(404).send({
                    message: errorMessage,
                });
            }
            res.status(201).send({
                message: successCourseCreated,
            });
            // await transporter.sendMail(
            //     registerEmail(user.email, user.firstName)
            // );
        });
    }
};

module.exports.getCourses = async (req, res) => {
    const courses = await Course.find({}).sort({
        createdTime: -1,
    });
    if (courses) {
        res.status(200).send({
            courses,
            messages: messages.successCoursesFound,
        });
    } else {
        res.status(404).send({ message: messages.errorNoCourseFound });
    }
};

module.exports.getActiveCourses = async (req, res) => {
    if (req.params && req.params.status) {
        const { status } = req.params;
        const courses = await Course.find({ status }).sort({
            createdTime: -1,
        });
        if (courses) {
            res.status(200).send({
                courses,
                messages: messages.successCoursesFound,
            });
        } else {
            res.status(404).send({ message: messages.errorNoCourseFound });
        }
    }
};
module.exports.getUserCourses = async (req, res) => {
    console.log("req.params", req.params);
    if (req.params && req.params.id) {
        const userId = req.params.id;
        const courses = await Course.find({ author: userId }).sort({
            createdTime: -1,
        });
        if (courses) {
            res.status(200).send({
                courses,
                messages: messages.successCoursesFound,
            });
        } else {
            res.status(404).send({ message: messages.errorUserNoCourseFound });
        }
    }
};
