// server/routes/adminEventRoutes.js
const express = require('express');
const router = express.Router();
const EventModel = require('../models/eventModel');

// Fetch all events
router.get('/events', async (req, res) => {
  try {
    const eventsList = await EventModel.find();
    res.json({ success: true, eventsList });
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// Delete event
router.delete('/deleteEvent/:eventId', async (req, res) => {
  try {
    const eventId = req.params.eventId;
    await EventModel.findByIdAndDelete(eventId);
    res.json({ success: true, message: 'Event deleted successfully' });
  } catch (error) {
    console.error('Error deleting event:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

module.exports = router;
