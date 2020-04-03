const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/contact_me";

module.exports.db = server => {
    mongoose
        .connect(
            uri,
            {
                useUnifiedTopology: true,
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false,
            },
            () => server
        )
        .then(() => console.log("Mongo db started ..."))
        .catch(e => console.log(e));
};
