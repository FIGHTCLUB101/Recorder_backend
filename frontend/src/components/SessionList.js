import React, { useEffect, useState } from "react";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const SessionList = () => {
  const { token } = useAuth();
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const sessionsPerPage = 5;

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const res = await api.get("/sessions");
        // Sort sessions by endTime (desc), then startTime (desc) in frontend as a fallback
        const sorted = [...res.data].sort((a, b) => {
          const aEnd = a.endTime ? new Date(a.endTime).getTime() : 0;
          const bEnd = b.endTime ? new Date(b.endTime).getTime() : 0;
          if (bEnd !== aEnd) return bEnd - aEnd;
          const aStart = a.startTime ? new Date(a.startTime).getTime() : 0;
          const bStart = b.startTime ? new Date(b.startTime).getTime() : 0;
          return bStart - aStart;
        });
        setSessions(sorted);
      } catch (err) {
        setError("Failed to load sessions.");
      } finally {
        setLoading(false);
      }
    };

    fetchSessions();
  }, [token]);

  // Pagination logic
  const totalPages = Math.ceil(sessions.length / sessionsPerPage);
  const paginatedSessions = sessions.slice(
    (currentPage - 1) * sessionsPerPage,
    currentPage * sessionsPerPage
  );

  if (loading) return <p>Loading sessions...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Your Team's Sessions</h2>
      {sessions.length === 0 ? (
        <p>No sessions found.</p>
      ) : (
        <>
        <ul className="space-y-4">
          {paginatedSessions.map((session) => (
            <li key={session._id} className="border p-4 rounded-lg shadow">
              <p className="text-sm text-gray-600">
                <strong>Started:</strong>{" "}
                {new Date(session.startTime).toLocaleString()}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Ended:</strong>{" "}
                {new Date(session.endTime).toLocaleString()}
              </p>
              {session.tags?.length > 0 && (
                <p className="text-sm text-blue-600">
                  <strong>Tags:</strong> {session.tags.join(", ")}
                </p>
              )}
              {session.notes && (
                <p className="text-sm italic text-gray-500">
                  <strong>Note:</strong> {session.notes}
                </p>
              )}
              <Link
                to={`/replay/${session._id}`}
                className="inline-block mt-2 text-blue-500 hover:underline"
              >
                View Replay
              </Link>
            </li>
          ))}
        </ul>
        {/* Pagination controls */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-4 space-x-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
        </>
      )}
    </div>
  );
};

export default SessionList;
