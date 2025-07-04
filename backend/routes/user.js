// const express = require('express');
// const router = express.Router();
// const User = require('../models/User');

// router.get('/me', async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id).select('-password');
//     if (!user) return res.status(404).json({ message: 'User not found' });
//     res.json(user);
//   } catch (err) {
//     console.error('Error fetching user:', err);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// module.exports = router;

// routes/user.js
// routes/user.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// GET /api/user/me
router.get('/me', async (req, res) => {
  // No authentication, return dummy user or public info
  try {
    // Return a dummy user object
    res.json({
      _id: 'anonymous',
      name: 'Anonymous User',
      email: 'anonymous@example.com',
      role: 'guest'
    });
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;



