// backend/routes/teams.js
const express = require('express');
const router = express.Router();
const { createTeam, addMember } = require('../controllers/teamController');

// Only authenticated (JWT) users reach here; further: only admin can create teams or add members
router.post('/', createTeam);
router.post('/:id/members', addMember);

module.exports = router;