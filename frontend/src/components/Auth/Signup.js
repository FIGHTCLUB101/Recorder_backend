// import React, { useState, useContext } from 'react';
// import api from '../../services/api';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../context/AuthContext';

// export default function Signup() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [teamName, setTeamName] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();
//   const { login } = useContext(AuthContext);

//   const handleSubmit = async e => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError('');
//     try {
//       const res = await api.signup({ email, password, teamName });
//       login(res.data.token);
//       navigate('/dashboard');
//     } catch (err) {
//       setError(err.response?.data?.message || 'Error during signup');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-green-500 flex items-center justify-center p-4">
//       <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl p-8 w-full max-w-md relative overflow-hidden animate-fade-in-down">
//         <div className="absolute top-0 left-0 right-0 h-1 bg-green-600"></div>

//         <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
//           Create Account
//         </h1>
//         <p className="text-center text-gray-600 mb-6">Join the team to get started</p>

//         {error && (
//           <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 text-sm">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email Address</label>
//             <input
//               type="email"
//               placeholder="you@example.com"
//               value={email}
//               onChange={e => setEmail(e.target.value)}
//               disabled={isLoading}
//               required
//               className="mt-1 w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:border-green-500 focus:outline-none focus:shadow-lg"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               placeholder="Create a password"
//               value={password}
//               onChange={e => setPassword(e.target.value)}
//               disabled={isLoading}
//               required
//               className="mt-1 w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:border-green-500 focus:outline-none focus:shadow-lg"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Team Name</label>
//             <input
//               type="text"
//               placeholder="Team Alpha"
//               value={teamName}
//               onChange={e => setTeamName(e.target.value)}
//               disabled={isLoading}
//               required
//               className="mt-1 w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:border-green-500 focus:outline-none focus:shadow-lg"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={isLoading}
//             className="w-full bg-green-600 text-white font-semibold py-3 rounded-xl hover:bg-green-700 transition"
//           >
//             {isLoading ? 'Creating Account...' : 'Sign Up'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }


//----------------------------------------------------------------------

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [teamName, setTeamName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    // Simulate API call
    setTimeout(() => {
      if (email && password && teamName) {
        alert('Account created successfully!');
        setError('');
      } else {
        setError('Please fill in all fields');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      
      <div className="relative z-10 bg-slate-800/80 backdrop-blur-xl shadow-2xl rounded-2xl p-8 w-full max-w-md border border-slate-700/50">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
          <p className="text-slate-300 text-sm">Join the team to get started</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-900/30 border border-red-500/50 text-red-300 p-3 mb-6 rounded-lg text-sm backdrop-blur-sm">
            {error}
          </div>
        )}

        {/* Form */}
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              disabled={isLoading}
              required
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400 transition-all duration-200 disabled:opacity-50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              disabled={isLoading}
              required
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400 transition-all duration-200 disabled:opacity-50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Team Name</label>
            <input
              type="text"
              placeholder="Team Alpha"
              value={teamName}
              onChange={e => setTeamName(e.target.value)}
              disabled={isLoading}
              required
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400 transition-all duration-200 disabled:opacity-50"
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating Account...
              </span>
            ) : (
              'Sign Up'
            )}
          </button>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-slate-400 text-sm">
            Already have an account?{' '}
            <button 
              className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
              onClick={() => navigate('/login')}
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}