
const express = require('express');
const mongoose = require('mongoose');
const noteModel = require('../models/NotesModel');

const noteRoutes = express.Router();

// CREATE a new note
noteRoutes.post('/notes', async (req, res) => {
    try {
        const { noteTitle, noteDescription, priority } = req.body;

        if (!noteTitle || !noteDescription) {
            return res.status(400).json({
                message: 'Note title and description cannot be empty'
            });
        }

        const note = new noteModel({
            noteTitle,
            noteDescription,
            priority
        });

        const savedNote = await note.save();

        res.status(201).json(savedNote);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});

// RETRIEVE all notes
noteRoutes.get('/notes', async (req, res) => {
    try {
        const notes = await noteModel.find();

        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// RETRIEVE a single note by ID
noteRoutes.get('/notes/:noteId', async (req, res) => {
    try {
        const { noteId } = req.params;

        if (!mongoose.isValidObjectId(noteId)) {
            return res.status(400).json({
                message: 'Invalid note ID'
            });
        }

        const note = await noteModel.findById(noteId);

        if (!note) {
            return res.status(404).json({
                message: 'Note not found'
            });
        }

        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// UPDATE a note by ID
noteRoutes.put('/notes/:noteId', async (req, res) => {
    try {
        const { noteId } = req.params;

        if (!mongoose.isValidObjectId(noteId)) {
            return res.status(400).json({
                message: 'Invalid note ID'
            });
        }

        const allowedFields = [
            'noteTitle',
            'noteDescription',
            'priority'
        ];

        const updates = {};

        for (const field of allowedFields) {
            if (req.body[field] !== undefined) {
                updates[field] = req.body[field];
            }
        }

        if (Object.keys(updates).length === 0) {
            return res.status(400).json({
                message: 'No valid fields provided for update'
            });
        }

        updates.dateUpdated = new Date();

        const updatedNote = await noteModel.findByIdAndUpdate(
            noteId,
            updates,
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedNote) {
            return res.status(404).json({
                message: 'Note not found'
            });
        }

        res.status(200).json(updatedNote);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});

// DELETE a note by ID
noteRoutes.delete('/notes/:noteId', async (req, res) => {
    try {
        const { noteId } = req.params;

        if (!mongoose.isValidObjectId(noteId)) {
            return res.status(400).json({
                message: 'Invalid note ID'
            });
        }

        const deletedNote = await noteModel.findByIdAndDelete(noteId);

        if (!deletedNote) {
            return res.status(404).json({
                message: 'Note not found'
            });
        }

        res.status(200).json({
            message: 'Note deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

module.exports = noteRoutes;
