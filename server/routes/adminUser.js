// server/routes/adminUser.js
const express = require('express');
const router = express.Router();
const UserModel = require('../models/userModel');

// Fetch all users
router.get('/users', async (req, res) => {
  try {
    const usersList = await UserModel.find();
    res.json({ success: true, usersList });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// Delete user
router.delete('/deleteUser/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    await UserModel.findByIdAndDelete(userId);
    res.json({ success: true, message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

module.exports = router;
