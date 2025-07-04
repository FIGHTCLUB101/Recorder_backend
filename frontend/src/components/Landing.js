// import React from 'react';
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell
// } from 'recharts';
// import { motion } from 'framer-motion';
// import { FaGoogle, FaGithub } from 'react-icons/fa';
// import starfield from '../assets/starfield.svg'; // ✅ Imported background image

// const dataLine = [
//   { name: '7/03', uv: 30 },
//   { name: '10/03', uv: 40 },
//   { name: '13/03', uv: 25 },
//   { name: '17/03', uv: 50 },
//   { name: '20/03', uv: 35 },
//   { name: '23/03', uv: 45 },
//   { name: '31/03', uv: 38 },
// ];

// const pieData = [
//   { name: 'Windows', value: 70 },
//   { name: 'Mac', value: 30 },
// ];

// const COLORS = ['#0088FE', '#00C49F'];

// const Landing = () => {
//   return (
//     <div className="bg-[#0B0A2F] min-h-screen text-white font-sans relative overflow-hidden">
//       {/* Background Starfield */}
//       <div className="absolute inset-0 -z-10 overflow-hidden">
//         <div className="absolute w-full h-full bg-gradient-to-b from-black via-[#0B0A2F] to-[#0B0A2F] opacity-50" />
//         <div
//           className="absolute w-full h-full bg-cover bg-center bg-repeat opacity-10"
//           style={{ backgroundImage: `url(${starfield})` }}
//         />
//       </div>

//       <div className="container mx-auto px-4 py-20">
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-center mb-10"
//         >
//           <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
//             Self-Hosted Session Replay
//           </h1>
//           <p className="text-lg text-gray-300 max-w-2xl mx-auto">
//             Visualize how users navigate your product in real time. Debug, optimize, and understand your users.
//           </p>

//           {/* Standard Auth */}
//           <div className="flex justify-center gap-6 mt-6">
//             <a
//               href="/signup"
//               className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg font-medium transition-all duration-300"
//             >
//               Sign Up
//             </a>
//             <a
//               href="/login"
//               className="border border-white hover:bg-white hover:text-black text-white px-6 py-3 rounded-xl shadow-lg font-medium transition-all duration-300"
//             >
//               Login
//             </a>
//           </div>

//           {/* OAuth Buttons */}
//           <div className="flex justify-center gap-6 mt-4">
//             <a
//               href="/auth/google"
//               className="flex items-center gap-2 bg-white text-black px-5 py-3 rounded-xl font-medium hover:bg-gray-100 transition-all"
//             >
//               <FaGoogle /> Sign in with Google
//             </a>
//             <a
//               href="/auth/github"
//               className="flex items-center gap-2 bg-[#171515] text-white px-5 py-3 rounded-xl font-medium hover:bg-black transition-all"
//             >
//               <FaGithub /> Sign in with GitHub
//             </a>
//           </div>
//         </motion.div>

//         {/* Demo Session Replay */}
//         <div className="bg-[#1A1A3D] rounded-xl p-6 mb-10 shadow-xl">
//           <h2 className="text-xl font-semibold mb-4">User Session Replay</h2>
//           <div className="bg-black text-green-400 p-4 rounded-md font-mono mb-2">
//             ▶ Replaying: <span className="text-cyan-400">user123_login → product_view → checkout</span>
//           </div>
//           <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
//             <div className="h-full bg-blue-400 animate-pulse" style={{ width: '65%' }} />
//           </div>
//           <div className="flex justify-between text-xs text-gray-400 mt-1">
//             <span>0:00</span>
//             <span>1:45</span>
//           </div>
//         </div>

//         {/* Live Analytics */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="bg-[#1A1A3D] rounded-xl p-6 shadow-xl">
//             <h2 className="text-xl font-semibold mb-4">Live Analytics</h2>
//             <ResponsiveContainer width="100%" height={200}>
//               <LineChart data={dataLine}>
//                 <CartesianGrid strokeDasharray="3 3" stroke="#333" />
//                 <XAxis dataKey="name" stroke="#ccc" />
//                 <YAxis stroke="#ccc" />
//                 <Tooltip />
//                 <Line type="monotone" dataKey="uv" stroke="#00c6ff" strokeWidth={2} />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>

//           {/* Environment Split */}
//           <div className="bg-[#1A1A3D] rounded-xl p-6 shadow-xl">
//             <h2 className="text-xl font-semibold mb-4">Environment Split</h2>
//             <ResponsiveContainer width="100%" height={200}>
//               <PieChart>
//                 <Pie
//                   data={pieData}
//                   cx="50%"
//                   cy="50%"
//                   innerRadius={40}
//                   outerRadius={80}
//                   paddingAngle={5}
//                   dataKey="value"
//                   label
//                 >
//                   {pieData.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                   ))}
//                 </Pie>
//               </PieChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Landing;


//------------------------------------------------------------------

import React, { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { motion } from 'framer-motion';
import { FaGoogle, FaGithub, FaPlay, FaPause, FaUsers, FaEye, FaChartLine, FaShieldAlt } from 'react-icons/fa';

const dataLine = [
  { name: '7/03', uv: 30 },
  { name: '10/03', uv: 40 },
  { name: '13/03', uv: 25 },
  { name: '17/03', uv: 50 },
  { name: '20/03', uv: 35 },
  { name: '23/03', uv: 45 },
  { name: '31/03', uv: 38 },
];

const pieData = [
  { name: 'Windows', value: 70 },
  { name: 'Mac', value: 30 },
];

const COLORS = ['#0088FE', '#00C49F'];

// Animated background particles
const Particles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

const Landing = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(65);

  // Animate progress bar
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setProgress(prev => prev >= 100 ? 0 : prev + 1);
      }, 200);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-gradient-to-br from-[#0B0A2F] via-[#1A1A3D] to-[#0B0A2F] min-h-screen text-white font-sans relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-full h-full bg-gradient-to-b from-black/20 via-[#0B0A2F]/80 to-[#0B0A2F] opacity-60" />
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-10 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
        />
        <Particles />
      </div>

      <div className="container mx-auto px-4 py-20">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-10"
        >
          <motion.div
            className="inline-block mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight">
              Self-Hosted Session Replay
            </h1>
          </motion.div>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Visualize how users navigate your product in real time. Debug, optimize, and understand your users with powerful analytics and complete privacy control.
          </motion.p>

          {/* Enhanced Auth Buttons */}
          <motion.div
            className="flex justify-center gap-6 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <motion.a
              href="/signup"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl shadow-2xl font-semibold transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign Up
            </motion.a>
            <motion.a
              href="/login"
              className="border-2 border-white/30 hover:bg-white/10 hover:border-white/50 text-white px-8 py-4 rounded-xl shadow-2xl font-semibold transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Login
            </motion.a>
          </motion.div>

          {/* Enhanced OAuth Buttons */}
          <motion.div
            className="flex justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <motion.a
              href="/auth/google"
              className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-gray-100 transition-all shadow-lg transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGoogle className="text-lg" /> Sign in with Google
            </motion.a>
            <motion.a
              href="/auth/github"
              className="flex items-center gap-3 bg-[#171515] text-white px-6 py-3 rounded-xl font-medium hover:bg-black transition-all shadow-lg transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="text-lg" /> Sign in with GitHub
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Enhanced Demo Session Replay */}
        <motion.div
          className="bg-gradient-to-r from-[#1A1A3D] to-[#2A2A4D] rounded-2xl p-8 mb-12 shadow-2xl border border-white/10 backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <FaPlay className="text-blue-400" />
              User Session Replay
            </h2>
            <motion.button
              onClick={togglePlayback}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
              {isPlaying ? 'Pause' : 'Play'}
            </motion.button>
          </div>
          
          <div className="bg-black/50 text-green-400 p-6 rounded-xl font-mono mb-4 border border-green-500/20">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm uppercase tracking-wide">Live Session</span>
            </div>
            <div className="text-lg">
              ▶ Replaying: <span className="text-cyan-400 font-semibold">user123_login → product_view → checkout</span>
            </div>
            <div className="text-sm text-gray-400 mt-2">
              Browser: Chrome 91.0 | OS: Windows 10 | Location: San Francisco, CA
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full h-3 bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full shadow-lg"
                style={{ width: `${progress}%` }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>
            <div className="flex justify-between text-sm text-gray-400 mt-2">
              <span>0:00</span>
              <span className="font-mono">{Math.floor(progress * 1.8 / 100)}:{String(Math.floor((progress * 1.8) % 60)).padStart(2, '0')}</span>
              <span>1:45</span>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Analytics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-gradient-to-br from-[#1A1A3D] to-[#2A2A4D] rounded-2xl p-8 shadow-2xl border border-white/10 backdrop-blur-sm"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <FaChartLine className="text-blue-400" />
              Live Analytics
            </h2>
            <div className="bg-black/20 p-4 rounded-xl mb-4">
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={dataLine}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="name" stroke="#ccc" />
                  <YAxis stroke="#ccc" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1A1A3D', 
                      border: '1px solid #333',
                      borderRadius: '8px',
                      color: '#fff'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="uv" 
                    stroke="#00c6ff" 
                    strokeWidth={3}
                    dot={{ fill: '#00c6ff', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: '#00c6ff', strokeWidth: 2 }}
                    connectNulls={true}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="text-sm text-gray-400">
              Real-time user engagement metrics
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-[#1A1A3D] to-[#2A2A4D] rounded-2xl p-8 shadow-2xl border border-white/10 backdrop-blur-sm"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.7 }}
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <FaShieldAlt className="text-green-400" />
              Environment Split
            </h2>
            <div className="bg-black/20 p-4 rounded-xl mb-4">
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={90}
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1A1A3D', 
                      border: '1px solid #333',
                      borderRadius: '8px',
                      color: '#fff'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="text-sm text-gray-400">
              User operating system distribution
            </div>
          </motion.div>
        </div>

        {/* New Features Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9 }}
        >
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Why Choose Self-Hosted?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: FaShieldAlt, title: "Complete Privacy", desc: "Your data never leaves your servers" },
              { icon: FaChartLine, title: "Real-time Analytics", desc: "Live insights as they happen" },
              { icon: FaUsers, title: "User-Focused", desc: "Understand your users better" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 + index * 0.1 }}
              >
                <feature.icon className="text-4xl text-blue-400 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;