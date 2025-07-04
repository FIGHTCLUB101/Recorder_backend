const Session = require('../models/Session');


exports.createSession = async function (req, res) {
  try {
    const session = new Session({
      userId: null, // No user
      teamId: null, // No team
      events: [],
      tags: [],
      notes: ''
    });
    await session.save();
    console.log('✅ Session created:', session._id);
    res.status(201).json({ sessionId: session._id });
  } catch (err) {
    console.error('❌ createSession error:', err);
    res.status(500).json({ message: 'Error creating session', error: err.message });
  }
};

exports.uploadChunk = async (req, res) => {
  const { id: sessionId } = req.params;
  const { events } = req.body;

  if (!events || events.length === 0) {
    console.log('⚠️ No events provided for session:', sessionId);
    return res.status(400).json({ message: 'No events provided' });
  }

  try {
    const session = await Session.findById(sessionId);
    if (!session) {
      console.log('❌ Session not found for uploadChunk:', sessionId);
      return res.status(404).json({ message: 'Session not found' });
    }

    session.events.push(...events); // ✅ Add to existing events array
    session.endTime = new Date();
    await session.save();
    console.log(`✅ Uploaded ${events.length} events to session:`, sessionId, '| Total events:', session.events.length);
    res.status(200).json({ message: 'Chunk uploaded' });
  } catch (err) {
    console.error('❌ uploadChunk error:', err);
    res.status(500).json({ message: 'Error saving chunk', error: err.message });
  }
};

// GET /api/sessions?page=1&pageSize=10
exports.listSessions = async (req, res) => {
  try {
    // Parse pagination params
    const page = parseInt(req.query.page, 10) || 1;
    const pageSize = parseInt(req.query.pageSize, 10) || 10;
    const skip = (page - 1) * pageSize;

    // Sort by endTime descending, then startTime descending as fallback
    const sessions = await Session.find({})
      .sort({ endTime: -1, startTime: -1 })
      .skip(skip)
      .limit(pageSize);
    const total = await Session.countDocuments({});
    res.status(200).json({ sessions, total });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching sessions', error: err.toString() });
  }
};


exports.getSession = async (req, res) => {
  try {
    const session = await Session.findById(req.params.id);
    if (!session) {
      console.log('❌ getSession: Session not found:', req.params.id);
      return res.status(404).json({ message: 'Session not found' });
    }
    // No user check
    const events = session.events;
    console.log('ℹ️ getSession:', req.params.id, '| Events count:', events ? events.length : 0);
    res.status(200).json({
      session: {
        _id: session._id,
        events,
        tags: session.tags,
        notes: session.notes,
        createdAt: session.createdAt
      }
    });
  } catch (err) {
    res.status(500).json({ message: 'Error getting session', error: err.message });
  }
};


// Update session tags or notes
exports.updateSession = async (req, res) => {
  try {
    const session = await Session.findById(req.params.id);
    if (!session) return res.status(404).json({ message: 'Session not found' });
    // No user check
    session.tags = req.body.tags || session.tags;
    session.notes = req.body.notes || session.notes;
    await session.save();
    res.status(200).json({ message: 'Session updated' });
  } catch (err) {
    res.status(500).json({ message: 'Error updating session', error: err });
  }
};

// Delete a session
exports.deleteSession = async (req, res) => {
  try {
    const session = await Session.findById(req.params.id);
    if (!session) return res.status(404).json({ message: 'Session not found' });
    // No user check
    await session.deleteOne();
    res.status(200).json({ message: 'Session deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting session', error: err });
  }
};

// Mark session as ended
exports.endSession = async (req, res) => {
  try {
    const session = await Session.findById(req.params.id);
    if (!session) return res.status(404).json({ message: 'Session not found' });
    session.endTime = new Date();
    await session.save();
    res.status(200).json({ message: 'Session ended' });
  } catch (err) {
    res.status(500).json({ message: 'Error ending session', error: err.message });
  }
};
