// frontend/src/components/Recorder.js
import React, { useEffect, useRef, useState } from 'react';
import { record } from 'rrweb';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

export default function Recorder() {
  const eventBufferRef = useRef([]);
  const sessionIdRef = useRef(null);
  const stopRef = useRef(null);
  const intervalRef = useRef(null);
  const navigate = useNavigate();

  const [status, setStatus] = useState('idle'); 

  async function flushEvents() {
    const events = eventBufferRef.current.splice(0);
    console.log('[Recorder] flushEvents called. events:', events);
    if (!sessionIdRef.current || events.length === 0) {
      if (!sessionIdRef.current) console.warn('[Recorder] No sessionIdRef.current');
      if (events.length === 0) console.warn('[Recorder] No events to upload');
      return;
    }
    try {
      const res = await api.saveSessionChunk(sessionIdRef.current, events);
      console.log(`[Recorder] Uploaded ${events.length} events to session ${sessionIdRef.current}. Response:`, res.data);
    } catch (err) {
      console.error('❌ Error uploading chunk:', err);
    }
  }

  async function initSession() {
    if (sessionIdRef.current) return; // Prevent duplicates
    setStatus('starting');
    try {
      const res = await api.createSession();
      sessionIdRef.current = res.data.sessionId;
      startRecording();
      setStatus('recording');
    } catch (err) {
      console.error('❌ Error creating session:', err);
      setStatus('error');
    }
  }

  function startRecording() {
    stopRef.current = record({
      maskAllInputs: true,
      emit(event) {
        eventBufferRef.current.push(event);
        console.log('[Recorder] Event recorded:', event);
        if (eventBufferRef.current.length >= 500) flushEvents();
      }
    });
    intervalRef.current = setInterval(flushEvents, 10000); // every 10 sec
    console.log('[Recorder] Started recording');
  }

  async function stopRecording() {
    if (stopRef.current) stopRef.current();
    clearInterval(intervalRef.current);
    await flushEvents();
    setStatus('stopped');
    console.log('[Recorder] Stopped recording');
    navigate('/dashboard');
  }

  useEffect(() => {
    // Cleanup on unmount
    return () => {
      if (stopRef.current) stopRef.current();
      clearInterval(intervalRef.current);
      flushEvents();
      console.log('[Recorder] Cleanup on unmount');
    };
  }, []);

  return (
    <div>
      <h2>Session Recorder</h2>
      <p>Status: {status}</p>

      {status === 'idle' && (
        <button onClick={initSession}>Start Recording</button>
      )}

      {status === 'recording' && (
        <button onClick={stopRecording}>Stop Recording</button>
      )}

      {status === 'error' && (
        <p style={{ color: 'red' }}>Failed to create session. Try again.</p>
      )}
    </div>
  );
}
