// backend/models/Session.js
const mongoose = require('mongoose');

const SessionSchema = new mongoose.Schema({
  teamId:    { type: mongoose.Schema.Types.ObjectId, ref: 'Team', index: true }, // not required
  userId:    { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // not required
  events:    { type: [mongoose.Schema.Types.Mixed], default: [] },
  tags:      [{ type: String }],
  notes:     { type: String },
  startTime: { type: Date, default: Date.now },
  endTime:   { type: Date }
});

module.exports = mongoose.model('Session', SessionSchema);