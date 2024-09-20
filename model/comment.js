const mongoose = require("mongoose");


const commentSchema = mongoose.Schema({
    userId: {
        type: String,
        type: trim
    },
    answer: {
        type: String,
        required: true
    }
});


module.exports = commentSchema;
