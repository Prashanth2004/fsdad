// server/routes/adminRoutes.js
const express = require('express');
const router = express.Router();

// Admin login route
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Simulated login logic, replace with actual authentication
  if (username === 'admin' && password === '@Admin1') {
    res.json({ success: true, message: 'Login successful!' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid username or password' });
  }
});

module.exports = router;
