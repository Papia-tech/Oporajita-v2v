const mongoose = require("mongoose");

const storySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    story: {
        type: String,
        required: true
    },

    anonymousName: {
        type: String,
        default: "Anonymous"
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Story", storySchema);