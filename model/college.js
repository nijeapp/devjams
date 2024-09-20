const mongoose = require("mongoose");

const collegeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    facilities: {
        type: String,
        trim: true     
    },
    profilePicture: {
        type: String, 
        trim: true
    },
    location: {
        type: String,
        trim: true
    }
});


const College = mongoose.model('College', collegeSchema)