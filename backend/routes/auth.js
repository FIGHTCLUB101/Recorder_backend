const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const User = require('../models/User');

// Auth routes
router.post('/login', authController.login);
router.post('/signup', authController.signup); // if you add signup frontend

// ✅ Get current logged-in user
router.get('/me', async (req, res) => {
  // No authentication, return dummy user
  try {
    res.json({
      _id: 'anonymous',
      name: 'Anonymous User',
      email: 'anonymous@example.com',
      role: 'guest'
    });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching user', error: err });
  }
});

module.exports = router;
