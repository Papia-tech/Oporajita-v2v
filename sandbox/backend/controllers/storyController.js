const Story = require("../models/Story");

// Create a new story
const createStory = async (req, res) => {
    try {
        const { title, category, story } = req.body;

        const newStory = new Story({
            title,
            category,
            story
        });

        await newStory.save();

        res.status(201).json({
            success: true,
            message: "Story shared successfully!",
            story: newStory
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get all stories
const getStories = async (req, res) => {
    try {
        const stories = await Story.find().sort({ createdAt: -1 });

        res.status(200).json(stories);

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    createStory,
    getStories
};