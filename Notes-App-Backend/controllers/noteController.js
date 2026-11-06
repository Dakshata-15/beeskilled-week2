
const Note = require("../models/Note");

// CREATE NOTE
const createNote = async (req, res) => {
    try {
        const { title, content, category } = req.body;

        if (!title || !content) {
            return res.status(400).json({
                success: false,
                message: "Title and content are required"
            });
        }

        const note = await Note.create({
            title,
            content,
            category,
            user: req.user.id
        });

        res.status(201).json({
            success: true,
            message: "Note created successfully",
            data: note
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// GET ALL USER NOTES
const getNotes = async (req, res) => {
    try {
        const notes = await Note.find({
            user: req.user.id
        }).sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: notes.length,
            data: notes
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// GET SINGLE NOTE
const getNoteById = async (req, res) => {
    try {
        const note = await Note.findOne({
            _id: req.params.id,
            user: req.user.id
        });

        if (!note) {
            return res.status(404).json({
                success: false,
                message: "Note not found"
            });
        }

        res.status(200).json({
            success: true,
            data: note
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Invalid note ID"
        });
    }
};

// UPDATE NOTE
const updateNote = async (req, res) => {
    try {
        const note = await Note.findOneAndUpdate(
            {
                _id: req.params.id,
                user: req.user.id
            },
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!note) {
            return res.status(404).json({
                success: false,
                message: "Note not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Note updated successfully",
            data: note
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// DELETE NOTE
const deleteNote = async (req, res) => {
    try {
        const note = await Note.findOneAndDelete({
            _id: req.params.id,
            user: req.user.id
        });

        if (!note) {
            return res.status(404).json({
                success: false,
                message: "Note not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Note deleted successfully"
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Invalid note ID"
        });
    }
};

module.exports = {
    createNote,
    getNotes,
    getNoteById,
    updateNote,
    deleteNote
};
