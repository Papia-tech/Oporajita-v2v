const express = require("express");
const router = express.Router();

const {
    createStory,
    getStories
} = require("../controllers/storyController");

// Get all stories
router.get("/", getStories);

// Add a new story
router.post("/", createStory);

module.exports = router;