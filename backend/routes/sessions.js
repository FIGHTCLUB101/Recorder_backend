// backend/routes/sessions.js
const express = require('express');
const router = express.Router();
const {
  createSession,
  uploadChunk,
  listSessions,
  getSession,
  updateSession,
  deleteSession
} = require('../controllers/sessionController');
const { authenticateJWT } = require('../middleware/authMiddleware');

router.post('/', createSession);
router.post('/:id/chunks', uploadChunk);
router.get('/', listSessions);
router.get('/:id', getSession);
router.put('/:id', updateSession);
router.delete('/:id', deleteSession);
module.exports = router;