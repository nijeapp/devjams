const mongoose = require("mongoose");
const commentSchema = require("./comment.js");

const querySchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    comments: [commentSchema],
    subquery: {
        type: String,
        required: true,
    }
});

const Query = mongoose.model("querySchema", querySchema);

module.exports = Query;