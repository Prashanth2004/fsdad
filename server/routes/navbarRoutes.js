// server/routes/navbarRoutes.js
const express = require('express');
const router = express.Router();

// NavBar route
router.get('/', (req, res) => {
  res.json({ message: 'NavBar route accessed successfully' });
});

module.exports = router;
