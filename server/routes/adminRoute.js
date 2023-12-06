// server/routes/adminRoute.js
const express = require('express');
const router = express.Router();
const User = require('../models/userModel'); // Import your User model

// Fetch alumni list
router.get('/alumni', async (req, res) => {
  try {
    const alumniList = await User.find({}, { fullName: 1, email: 1, rollNumber: 1, batchYear: 1, department: 1, status: 1 });
    res.json({ success: true, alumniList });
  } catch (error) {
    console.error('Error fetching alumni list:', error);
    res.json({ success: false, message: 'Error fetching alumni list' });
  }
});

// Verify user
router.put('/verify/:userId', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.userId, { status: 'verified' }, { new: true });
    res.json({ success: true, user });
  } catch (error) {
    console.error('Error verifying user:', error);
    res.json({ success: false, message: 'Error verifying user' });
  }
});

// Unverify user
router.put('/unverify/:userId', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.userId, { status: 'unverified' }, { new: true });
    res.json({ success: true, user });
  } catch (error) {
    console.error('Error unverifying user:', error);
    res.json({ success: false, message: 'Error unverifying user' });
  }
});

module.exports = router;
